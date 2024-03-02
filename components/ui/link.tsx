import React, { AnchorHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import NextLink from "next/link";
import { BiLoaderCircle } from "react-icons/bi";

const linkVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-slate-400 focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400",
        secondary:
          "text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:ring-gray-400",
        success:
          "text-green-500 hover:text-green-600 focus:text-green-600 focus:ring-green-400",
        danger:
          "text-red-500 hover:text-red-600 focus:text-red-600 focus:ring-red-400",
        warning:
          "text-yellow-500 hover:text-yellow-600 focus:text-yellow-600 focus:ring-yellow-400",
        info: "text-teal-500 hover:text-teal-600 focus:text-teal-600 focus:ring-teal-400",
        light:
          "text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:ring-gray-400",
        dark: "text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:ring-gray-400",
        link: "text-blue-500 hover:underline focus:text-blue-600 focus:ring-blue-400",
        text: "text-blue-900 hover:underline",
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

interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "size">,
    VariantProps<typeof linkVariants> {
  isLoading?: boolean;
  to: string;
}

const Link: FC<LinkProps> = ({
  className,
  children,
  variant,
  isLoading,
  to,
  ...props
}) => {
  return (
    <NextLink
      href={to}
      className={cn(linkVariants({ variant, className }))}
      {...props}
    >
      {isLoading ? (
        <BiLoaderCircle className="w-4 h-4 mr-2 animate-spin" />
      ) : null}
      {children}
    </NextLink>
  );
};

export default Link;
