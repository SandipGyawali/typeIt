import * as React from 'react';
import { cn } from '../../lib/utils';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { CircleAlert } from 'lucide-react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  placeholder?: string;
  helperText?: string;
  type?: string;
  readOnly: boolean;
  validation: RegisterOptions;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      placeholder = '',
      helperText,
      id,
      name,
      readOnly = false,
      validation,
      ...props
    },
    ref
  ) => {
    const {
      register,
      formState: { errors },
    } = useFormContext();

    return (
      <div>
        <div className="relative">
          <input
            {...register(name, validation)}
            {...props}
            type={type}
            name={name}
            readOnly={readOnly}
            ref={ref}
            className={cn(
              readOnly
                ? 'cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0'
                : errors[name]
                ? 'border-h1 focus:border-h1 focus-outline-h1/50 focus:ring-0'
                : 'focus:border-foreground focus:outline-foreground/50 focus:ring-0',
              'w-ful rounded-md bg-h1 text-background shadow-b',
              className
            )}
          />

          {errors[name] && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <CircleAlert className="text-sl text-bg/80" />
            </div>
          )}
        </div>

        <div className="mt-1 text-left">
          {helperText && <p className="text-xs text-gray-500">{helperText}</p>}
          {errors[name] && (
            <span className="text-sm text-h1">
              {errors[name]?.message as string}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';
export { Input };
