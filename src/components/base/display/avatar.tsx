"use client";

import { forwardRef } from "react";
import { cx } from "@/utils/cx";

export interface AvatarProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  src?: string;
  alt?: string;
  fallback?: string;
  status?: "online" | "offline" | "away" | "busy";
}

const avatarStyles = {
  base: [
    "relative inline-flex items-center justify-center rounded-full bg-gray-500 overflow-hidden",
    "text-white font-medium select-none",
  ],
  size: {
    xs: "h-6 w-6 text-xs",
    sm: "h-8 w-8 text-sm", 
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
    xl: "h-14 w-14 text-lg",
    "2xl": "h-16 w-16 text-xl",
  },
  status: {
    online: "border-2 border-white shadow-sm after:absolute after:bottom-0 after:right-0 after:h-3 after:w-3 after:rounded-full after:bg-success-500 after:border-2 after:border-white",
    offline: "border-2 border-white shadow-sm after:absolute after:bottom-0 after:right-0 after:h-3 after:w-3 after:rounded-full after:bg-gray-400 after:border-2 after:border-white",
    away: "border-2 border-white shadow-sm after:absolute after:bottom-0 after:right-0 after:h-3 after:w-3 after:rounded-full after:bg-warning-500 after:border-2 after:border-white",
    busy: "border-2 border-white shadow-sm after:absolute after:bottom-0 after:right-0 after:h-3 after:w-3 after:rounded-full after:bg-error-500 after:border-2 after:border-white",
  },
};

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ 
    className,
    size = "md",
    src,
    alt = "",
    fallback,
    status,
    ...props 
  }, ref) => {
    const avatarClasses = cx(
      avatarStyles.base,
      avatarStyles.size[size],
      status && avatarStyles.status[status],
      className
    );

    const generateFallback = (name?: string) => {
      if (!name) return "?";
      return name.split(" ").map(word => word[0]).join("").toUpperCase().slice(0, 2);
    };

    return (
      <div ref={ref} className={avatarClasses} {...props}>
        {src ? (
          <img 
            src={src} 
            alt={alt}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <span className="text-current">
            {fallback || generateFallback(alt)}
          </span>
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";