import { useEffect, useState, useRef, type ReactNode } from "react";

const TAB_WIDTH = 60;

interface PaneProps {
  className?: string;
  isTransformed: boolean;
  isActive: boolean;
  index: number;
  children: ReactNode;
  onScrollToTop?: () => void;
  onScrollToBottom?: () => void;
  onClick: () => void;
  agency?: {
    name: string;
    title: string;
    textColor: string;
  };
}

function getStyle(isTransformed: boolean, index: number) {
  const percent = `${index * TAB_WIDTH}px`;
  const width = `calc(100vw - ${TAB_WIDTH * 4}px)`;
  if (isTransformed) {
    return {
      right: percent,
      transform: `translate(calc(-100% + ${TAB_WIDTH}px))`,
      width,
    };
  } else {
    return { right: percent, width };
  }
}

const RESISTANCE_THRESHOLD = 600;

export function Pane({
  index,
  isActive,
  isTransformed,
  children,
  className,
  onScrollToTop,
  onScrollToBottom,
  onClick,
  agency,
  ...props
}: PaneProps) {
  const paneRef = useRef<HTMLDivElement>(null);
  const [overscroll, setOverscroll] = useState(0);

  useEffect(() => {
    if (isActive && paneRef.current) {
      paneRef.current.scrollTo(0, 0);
    }
  }, [isActive]);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (!paneRef.current || !isActive) return;

      const { scrollTop, scrollHeight, clientHeight } = paneRef.current;
      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 3;

      if (atBottom && event.deltaY > 0) {
        setOverscroll((prev) =>
          Math.min(prev + event.deltaY, RESISTANCE_THRESHOLD),
        );
      } else if (atTop && event.deltaY < 0) {
        setOverscroll((prev) =>
          Math.max(prev + event.deltaY, -RESISTANCE_THRESHOLD),
        );
      } else {
        setOverscroll(0); // Reset overscroll if scrolling normally
      }

      if (overscroll >= RESISTANCE_THRESHOLD) {
        onScrollToBottom?.();
        setOverscroll(0);
      } else if (overscroll <= -RESISTANCE_THRESHOLD) {
        onScrollToTop?.();
        setOverscroll(0);
      }
    };

    paneRef.current?.addEventListener("wheel", handleScroll);

    return () => {
      paneRef.current?.removeEventListener("wheel", handleScroll);
    };
  }, [isActive, overscroll]);

  return (
    <div
      ref={paneRef}
      style={getStyle(isTransformed, index)}
      className={`hide-scrollbar ease-[cubic-bezier(0.42, 0, 0.58, 1)] transition duration-800 ${
        isActive ? "h-screen overflow-auto" : "h-screen overflow-hidden"
      } ${className ?? ""} flex p-4`}
      onClick={onClick}
      {...props}
    >
      <div className="flex-grow">
        {children}
        <div className="h-[100px]" />
      </div>
      {agency && (
        <div
          role="button"
          className="sticky right-0 top-0 ml-4 flex h-full cursor-pointer flex-col items-center justify-items-start"
        >
          <p
            className={`font-neueHaas text-sm font-semibold ${agency.textColor} whitespace-nowrap`}
          >
            {agency.name}
          </p>

          <p
            className={`flex hidden items-center font-neueHaas text-xl font-semibold md:block md:text-2xl ${agency.textColor} md:text-vertical text-horizontal text-right md:mt-4 md:text-left`}
          >
            {agency.title}
          </p>
        </div>
      )}
    </div>
  );
}
