import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

/**
 * Generates a set of class names for button components based on variant and size options.
 *
 * @param {string} baseClass - The base class names for the button.
 * @param {Object} options - The options for generating the class names.
 * @param {Object} options.variants - The variant options for the button.
 * @param {Object} options.variants.variant - The different style variants for the button.
 * @param {string} options.variants.variant.default - Default button style.
 * @param {string} options.variants.variant.destructive - Destructive button style.
 * @param {string} options.variants.variant.outline - Outline button style.
 * @param {string} options.variants.variant.secondary - Secondary button style.
 * @param {string} options.variants.variant.ghost - Ghost button style.
 * @param {string} options.variants.variant.link - Link button style.
 * @param {Object} options.variants.size - The different size options for the button.
 * @param {string} options.variants.size.default - Default button size.
 * @param {string} options.variants.size.sm - Small button size.
 * @param {string} options.variants.size.lg - Large button size.
 * @param {string} options.variants.size.icon - Icon button size.
 * @param {Object} options.defaultVariants - The default variant options for the button.
 * @param {string} options.defaultVariants.variant - The default style variant.
 * @param {string} options.defaultVariants.size - The default size variant.
 * @returns {string} The generated class names for the button.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
