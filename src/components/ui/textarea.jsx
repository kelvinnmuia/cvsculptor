import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * A custom textarea component that forwards its ref and accepts additional props.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {string} [props.className] - Additional class names to apply to the textarea.
 * @param {React.Ref} ref - The ref to be forwarded to the textarea element.
 * @returns {JSX.Element} The rendered textarea component.
 */
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
