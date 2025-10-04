"use client";

import { forwardRef } from "react";
import { TextField, Label, Input as AriaInput, type TextFieldProps } from "react-aria-components";
import { cx } from "@/utils/cx";

export interface InputProps extends Omit<TextFieldProps, "className" | "onChange"> {
  className?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "filled";
  error?: boolean;
  helperText?: string;
  errorText?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
}

const inputStyles = {
  base: [
    "w-full rounded-lg border transition-colors duration-200",
    "focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500",
    "placeholder:text-gray-400",
    "disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed",
  ],
  size: {
    sm: "px-3 py-2 text-sm",
    md: "px-3 py-2.5 text-sm",
    lg: "px-4 py-3 text-base",
  },
  variant: {
    default: "bg-white border-gray-300 hover:border-gray-400",
    filled: "bg-gray-50 border-gray-200 hover:bg-white hover:border-gray-300",
  },
  state: {
    error: "border-error-300 focus:border-error-500 focus:ring-error-500/20",
    success: "border-success-300 focus:border-success-500 focus:ring-success-500/20",
  },
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className,
    label,
    size = "md",
    variant = "default", 
    error = false,
    helperText,
    errorText,
    placeholder,
    required = false,
    disabled = false,
    value,
    onChange,
    type = "text",
    ...props 
  }, ref) => {
    const inputClasses = cx(
      inputStyles.base,
      inputStyles.size[size],
      inputStyles.variant[variant],
      error && inputStyles.state.error,
      className
    );

    return (
      <TextField 
        isRequired={required}
        isDisabled={disabled}
        isInvalid={error}
        value={value}
        onChange={onChange}
        {...props}
      >
        {label && (
          <Label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
            {required && <span className="text-error-500 ml-1">*</span>}
          </Label>
        )}
        <AriaInput
          ref={ref}
          placeholder={placeholder}
          type={type}
          className={inputClasses}
        />
        {errorText && (
          <div className="mt-1 text-sm text-error-600">{errorText}</div>
        )}
        {helperText && !errorText && (
          <div className="mt-1 text-sm text-gray-500">{helperText}</div>
        )}
      </TextField>
    );
  }
);

Input.displayName = "Input";