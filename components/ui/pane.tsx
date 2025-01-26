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

export function Pane({ children, className = "", ...props }: PaneProps) {
  return (
    <section
      className={`relative flex-1 min-w-full md:min-w-0 p-8 transition-all duration-500 hover:flex-[1.5] ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}



// ifActive  = true be then enable scroll