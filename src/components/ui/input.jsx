import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * A forward-ref input component with customizable styles and props.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.className] - Additional class names to apply to the input element.
 * @param {string} [props.type] - The type of the input element.
 * @param {React.Ref} ref - The ref to be forwarded to the input element.
 * @returns {JSX.Element} The rendered input element.
 */
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
