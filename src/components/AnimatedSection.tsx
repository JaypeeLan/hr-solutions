import React, { ReactNode, useRef } from "react";
import useIntersectionObserver from "../hooks/useInterscetionObserver";

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
