import { useEffect, useRef, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface PaneProps {
  className?: string;
  isTransformed: boolean;
  isActive: boolean;
  index: number;
  children: ReactNode;
  onScrollToBottom: () => void;
}

function getStyle(isTransformed: boolean, index: number) {
  const percent = `${index * 3}%`;
  if (isTransformed) {
    return { right: percent, transform: "translate(-84vw)" };
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
  ...props
}: PaneProps) {
  const paneRef = useRef<HTMLDivElement>(null);

  const { ref: bottomRef, inView } = useInView({
    threshold: 0,
  });

  // Scroll to top when the pane becomes active
  useEffect(() => {
    if (isActive && paneRef.current) {
      paneRef.current.scrollTo(0, 0);
    }
  }, [isActive]);

  // Reset scroll position when the pane becomes inactive
  // useEffect(() => {
  //   if (!isActive && paneRef.current) {
  //     paneRef.current.scrollTo(0, 0);
  //   }
  // }, [isActive]);

  useEffect(() => {
    if (inView && onScrollToBottom) {
      onScrollToBottom();
    }
  }, [inView]);

  return (
    <div
      ref={paneRef}
      style={getStyle(isTransformed, index)}
      className={`transition duration-700 ease-[cubic-bezier(0.42, 0, 0.58, 1)] justify-items-end ${
        isActive ? " h-screen overflow-auto" : "overflow-hidden h-screen"
      }  ${className ?? ""}  md:min-w-[100em] p-4`}
      {...props}
    >
      <div className="flex flex-row">{children}</div>
      <div className="h-[150px]" />
      <div ref={bottomRef} className="h-[10px]" />
    </div>
  );
}
