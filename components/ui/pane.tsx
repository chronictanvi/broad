import { useEffect, useRef, type ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface PaneProps {
  className?: string;
  isTransformed: boolean;
  isActive: boolean;
  index: number;
  children: ReactNode;
  onScrollToBottom: () => void;
  onClick: () => void;
  agency?: {
    name: string;
    title: string;
    textColor: string;
  };
}

function getStyle(isTransformed: boolean, index: number) {
  const percent = `${index * 3}%`;
  if (isTransformed) {
    return { right: percent, transform: "translate(-85vw)" };
  } else {
    return { right: percent };
  }
}

export function Pane({
  index,
  isActive,
  isTransformed,
  children,
  className,
  onScrollToBottom,
  onClick,
  agency,
  ...props
}: PaneProps) {
  const paneRef = useRef<HTMLDivElement>(null);

  const { ref: bottomRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (isActive && paneRef.current) {
      paneRef.current.scrollTo(0, 0);
    }
  }, [isActive]);

  useEffect(() => {
    if (inView && onScrollToBottom) {
      onScrollToBottom();
    }
  }, [inView]);

  return (
    <div
      ref={paneRef}
      style={getStyle(isTransformed, index)}
      className={`transition duration-700 ease-[cubic-bezier(0.42, 0, 0.58, 1)] ${
        isActive ? "h-screen overflow-auto" : "overflow-hidden h-screen"
      } ${className ?? ""} min-w-[90vw] p-4 flex`}
      onClick={onClick}
      {...props}
    >
      <div className="flex-grow">
        {children}
        <div className="h-[150px]" />
        <div ref={bottomRef} className="h-[100px]" />
      </div>
      {agency && (
        <div className="sticky top-0 flex flex-col items-center justify-items-start h-full ml-4">
          <p className={`text-sm ${agency.textColor} whitespace-nowrap`}>
            {agency.name}
          </p>

          <p
            className={`flex hidden md:block items-center md:text-2xl text-xl md:font-light font-medium ${agency.textColor} md:mt-4 text-right md:text-vertical md:text-left text-horizontal`}
          >
            {agency.title}
          </p>
        </div>
      )}
    </div>
  );
}
