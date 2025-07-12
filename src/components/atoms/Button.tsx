import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  animate?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "right",
    animate = true,
    children,
    ...props
  }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
      primary: "retro-gradient text-white hover:opacity-90 focus:ring-purple-500",
      secondary: "retro-gradient-alt text-white hover:opacity-90 focus:ring-indigo-500",
      outline: "border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white dark:text-purple-400 dark:border-purple-400 dark:hover:bg-purple-400 dark:hover:text-white focus:ring-purple-500",
      ghost: "text-gray-700 hover:text-purple-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-purple-400 dark:hover:bg-gray-800 focus:ring-purple-500"
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    };

    const ButtonComponent = animate ? motion.button : "button";
    const animationProps = animate ? {
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 }
    } : {};

    return (
      <ButtonComponent
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        {...animationProps}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="mr-2">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="ml-2">{icon}</span>
        )}
      </ButtonComponent>
    );
  }
);

Button.displayName = "Button";

export { Button };
