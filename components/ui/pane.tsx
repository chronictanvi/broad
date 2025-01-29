import { useEffect, useRef, ReactNode } from "react";

interface PaneProps {
  className?: string;
  isTransformed: boolean;
  isActive: boolean;
  index: number;
  children: ReactNode;
}

function getStyle(isTransformed: boolean, index: number) {
  const percent = `${index * 5}%`;
  if (isTransformed) {
    return { right: percent, transform: "translate(-75vw)" };
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
  ...props
}: PaneProps) {
  const paneRef = useRef<HTMLDivElement>(null);

  // Scroll to top when the pane becomes active
  useEffect(() => {
    if (isActive && paneRef.current) {
      paneRef.current.scrollTo(0, 0);
    }
  }, [isActive]);

  // Reset scroll position when the pane becomes inactive
  useEffect(() => {
    if (!isActive && paneRef.current) {
      paneRef.current.scrollTo(0, 0);
    }
  }, [isActive]);

  return (
    <div
      ref={paneRef}
      style={getStyle(isTransformed, index)}
      className={`transition ease-in-out justify-items-end ${
        isActive
          ? " h-screen overflow-auto"
          : "overflow-hidden h-screen"
      }  ${className ?? ""} justify-items-end flex flex-row min-w-96 md:min-w-0 p-6`}
      {...props}
    >
      {children}
    </div>
  );
}
