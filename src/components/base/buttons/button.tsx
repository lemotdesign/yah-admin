"use client";

import { forwardRef } from "react";
import { cx } from "@/utils/cx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color?: "primary" | "secondary" | "tertiary" | "gray" | "error" | "success";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "solid" | "outline" | "ghost";
  iconLeading?: React.ComponentType<any>;
  iconTrailing?: React.ComponentType<any>;
  loading?: boolean;
  fullWidth?: boolean;
  isDisabled?: boolean;
  onPress?: () => void;
}

const buttonStyles = {
  base: "inline-flex items-center justify-center gap-x-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-[0.98] active:scale-[0.95]",
  
  size: {
    xs: "h-8 px-3 text-xs rounded-md",
    sm: "h-9 px-3 text-sm rounded-md", 
    md: "h-10 px-4 text-sm rounded-lg",
    lg: "h-11 px-4 text-base rounded-lg",
    xl: "h-12 px-5 text-base rounded-lg",
    "2xl": "h-14 px-6 text-lg rounded-xl",
  },
  
  variant: {
    solid: {
      primary: "bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-500 disabled:bg-gray-200 disabled:text-gray-400",
      secondary: "bg-gray-900 text-white hover:bg-gray-800 focus-visible:ring-gray-500 disabled:bg-gray-200 disabled:text-gray-400",
      tertiary: "bg-gray-50 text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-500 disabled:bg-gray-50 disabled:text-gray-400",
      gray: "bg-gray-600 text-white hover:bg-gray-700 focus-visible:ring-gray-500 disabled:bg-gray-200 disabled:text-gray-400",
      error: "bg-error-600 text-white hover:bg-error-700 focus-visible:ring-error-500 disabled:bg-gray-200 disabled:text-gray-400",
      success: "bg-success-600 text-white hover:bg-success-700 focus-visible:ring-success-500 disabled:bg-gray-200 disabled:text-gray-400",
    },
    outline: {
      primary: "border border-brand-600 text-brand-600 hover:bg-brand-50 focus-visible:ring-brand-500 disabled:border-gray-200 disabled:text-gray-400",
      secondary: "border border-gray-900 text-gray-900 hover:bg-gray-50 focus-visible:ring-gray-500 disabled:border-gray-200 disabled:text-gray-400",
      tertiary: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-500 disabled:border-gray-200 disabled:text-gray-400",
      gray: "border border-gray-600 text-gray-600 hover:bg-gray-50 focus-visible:ring-gray-500 disabled:border-gray-200 disabled:text-gray-400",
      error: "border border-error-600 text-error-600 hover:bg-error-50 focus-visible:ring-error-500 disabled:border-gray-200 disabled:text-gray-400",
      success: "border border-success-600 text-success-600 hover:bg-success-50 focus-visible:ring-success-500 disabled:border-gray-200 disabled:text-gray-400",
    },
    ghost: {
      primary: "text-brand-600 hover:bg-brand-50 focus-visible:ring-brand-500 disabled:text-gray-400",
      secondary: "text-gray-900 hover:bg-gray-50 focus-visible:ring-gray-500 disabled:text-gray-400",
      tertiary: "text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-500 disabled:text-gray-400",
      gray: "text-gray-600 hover:bg-gray-50 focus-visible:ring-gray-500 disabled:text-gray-400",
      error: "text-error-600 hover:bg-error-50 focus-visible:ring-error-500 disabled:text-gray-400",
      success: "text-success-600 hover:bg-success-50 focus-visible:ring-success-500 disabled:text-gray-400",
    },
  },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    color = "primary", 
    size = "md", 
    variant = "solid",
    iconLeading: IconLeading,
    iconTrailing: IconTrailing,
    loading = false,
    fullWidth = false,
    isDisabled = false,
    onPress,
    onClick,
    children,
    ...props 
  }, ref) => {
    const baseClasses = cx(
      buttonStyles.base,
      buttonStyles.size[size],
      buttonStyles.variant[variant][color],
      fullWidth && "w-full"
    );

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onPress) {
        onPress();
      }
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <button
        ref={ref}
        className={cx(baseClasses, className)}
        disabled={loading || isDisabled || props.disabled}
        onClick={handleClick}
        {...props}
      >
        {loading ? (
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
        ) : IconLeading ? (
          <IconLeading className="h-4 w-4" />
        ) : null}
        {children}
        {!loading && IconTrailing && <IconTrailing className="h-4 w-4" />}
      </button>
    );
  }
);

Button.displayName = "Button";