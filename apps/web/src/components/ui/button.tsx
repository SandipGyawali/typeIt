import * as React from 'react';
import { cn } from '../../lib/utils';

enum buttonVariant {
  'primary',
  'outline',
  'ghost',
  'light',
  'dark',
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isDark?: boolean;
  variant: keyof typeof buttonVariant;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        className={cn(
          `outline-solid active:bg-foreground-80 mb-8 transform rounded-lg
          bg-foreground px-3 py-2 font-primary text-background shadow-b shadow-foreground/50 
          outline-offset-[6px] transition-all duration-200 hover:bg-foreground/90 focus:outline-[3px]
          focus:outline-foreground/50 active:translate-y-[4px] active:shadow-none`
        )}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export { Button, buttonVariant };
