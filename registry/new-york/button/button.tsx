import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-medium transition-colors ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-16 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-neutrals-900 text-neutrals-00-white  focus-visible:bg-neutrals-700 hover:bg-neutrals-700 active:bg-neutrals-600 disabled:bg-neutrals-500",
        "primary-alt":
          "bg-brand-500 text-primary-alt-button-text  focus-visible:bg-neutrals-700 focus-visible:text-neutrals-00-white hover:bg-neutrals-700 hover:text-neutrals-00-white active:bg-neutrals-600 active:text-neutrals-00-white disabled:bg-neutrals-100 disabled:text-neutrals-500",
        secondary:
          "border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        text: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        "text-alt": "bg-background text-primary shadow-sm hover:bg-primary/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "py-8 px-16 text-sm",
        md: "h-10 px-8",
        lg: "h-12 px-12 text-lg",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
