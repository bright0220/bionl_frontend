import clsx from "clsx";
import * as React from "react";

import { Spinner } from "@/components/Elements/Spinner";

const variants = {
  primary:
    "bg-primary-600 hover:bg-indigo-700  focus:ring-indigo-500  text-white disabled:bg-primary-400",
  secondary:
    "bg-secondary-500 hover:bg-secondary-600  focus:ring-indigo-500  text-white",
  inverse: "bg-white text-primary-600",
  white: "bg-white border border-gray-300 text-gray-700",
  danger: "bg-red-700 hover:bg-red-800 text-white",
};

const sizes = {
  sm: "py-2 px-2 text-sm",
  md: "py-2 px-2 text-base",
  lg: "py-3 px-2 text-lg",
};

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
} & IconProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "button",
      className = "",
      variant = "primary",
      size = "md",
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center rounded-md  font-medium text-white shadow-sm  transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2  disabled:cursor-not-allowed",
          variants[variant],
          sizes[size],
          className
        )}
        type={type}
        {...props}
      >
        {isLoading && <Spinner className="mx-1 text-current" size="sm" />}
        {!isLoading && startIcon}
        <span className="mx-2">{props.children}</span> {!isLoading && endIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
