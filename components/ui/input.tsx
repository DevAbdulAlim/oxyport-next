import { VariantProps, cva } from "class-variance-authority";
import { FC, InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

const inputVariants = cva(
  "mt-1 p-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500",
  {
    variants: {
      variant: {
        default: "focus:border-blue-500 focus:ring-blue-500",
        error: "border-red-500 focus:border-red-500 focus:ring-red-500",
        success: "border-blue-500 focus:border-blue-500 focus:ring-blue-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const Input: FC<InputProps> = ({ className, variant, ...props }) => {
  return (
    <input className={cn(inputVariants({ variant, className }))} {...props} />
  );
};

export default Input;
