"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedGroupProps {
  children: React.ReactNode;
  className?: string;
  variants?: Record<string, unknown>;
}

export const AnimatedGroup: React.FC<AnimatedGroupProps> = ({
  children,
  className,
  variants: _variants,
  ...props
}) => {
  return (
    <div
      className={cn(
        "animate-in fade-in-0 slide-in-from-bottom-4 duration-1000",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
