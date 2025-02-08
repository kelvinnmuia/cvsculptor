import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

/**
 * A Toaster component that displays toast notifications.
 *
 * This component uses the `useTheme` hook to determine the theme to apply,
 * defaulting to "system" if no theme is set. It leverages the Sonner library
 * to render toasts with customizable classNames for styling different parts
 * of the toast, such as the toast container, description, action button, and
 * cancel button.
 *
 * @param {Object} props - The properties passed to the Sonner component.
 */

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    (<Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props} />)
  );
}

export { Toaster }
