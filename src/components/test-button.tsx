'use client'

import { forwardRef } from "react";

export interface TestButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost";
  color?: "primary" | "gray";
}

export const TestButton = forwardRef<HTMLButtonElement, TestButtonProps>(
  ({ className, variant = "solid", color = "primary", children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors";
    const variantClasses = variant === "solid" ? "bg-blue-600 text-white hover:bg-blue-700" : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50";
    
    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses} ${className || ''}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

TestButton.displayName = "TestButton";