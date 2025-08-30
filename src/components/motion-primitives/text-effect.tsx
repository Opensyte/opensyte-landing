"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TextEffectProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  preset?: string;
  speedSegment?: number;
  per?: string;
  delay?: number;
}

export const TextEffect: React.FC<TextEffectProps> = ({
  children,
  className,
  as: Component = "div",
  preset: _preset,
  speedSegment: _speedSegment,
  per: _per,
  delay,
  ...props
}) => {
  return (
    <Component
      className={cn(
        "animate-in fade-in-0 slide-in-from-bottom-4 duration-1000",
        className,
      )}
      style={{
        animationDelay: delay ? `${delay}s` : undefined,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};
