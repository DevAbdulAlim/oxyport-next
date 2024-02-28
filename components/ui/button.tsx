import React, { ButtonHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { BiLoaderCircle } from "react-icons/bi";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events:none",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400",
        secondary:
          "bg-gray-300 text-gray-800 hover:bg-gray-400 focus:ring-gray-400",
        success:
          "bg-green-500 text-white hover:bg-green-600 focus:ring-green-400",
        danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
        warning:
          "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400",
        info: "bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-400",
        light:
          "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300",
        dark: "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-600",
        link: "text-blue-500 hover:underline focus:ring-blue-400",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-3",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  isLoading,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <BiLoaderCircle className="w-4 h-4 mr-2 animate-spin" />
      ) : null}
      {children}
    </button>
  );
};

export default Button;
