import { ReactNode } from "react";

interface PaneProps {
  className?: string;
  isTransformed: boolean;
  isActive: boolean;
  index: number;
  children: ReactNode;
}

// isTransformed means pane is on the left and all content is 'revelealed in the stack' if its not transformed its still on the right and to be read.

// isActive is there for keeping track of scroll

function getStyle(isTransformed, index) {
  const percent = `${index * 5}%`;
  if (isTransformed) {
    return { left: percent, transform: "translate(75vw)" };
  } else {
    return { left: percent };
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
  console.log(index, isTransformed);
  return (
    <div
      style={getStyle(isTransformed, index)}
      className={`transition ease-in-out ${
        isActive
          ? "md:w-full h-screen overflow-auto"
          : "overflow-hidden h-screen"
      }  ${className ?? ""} relative flex-1 min-w-full md:min-w-0 p-8 
      `}
      {...props}
    >
      {children}
    </div>
  );
}

// ifActive  = true be then enable scroll
