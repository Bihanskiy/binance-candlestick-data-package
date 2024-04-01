import React, { forwardRef } from 'react'

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge'

export type SpinnerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: 'lg' | 'md' | 'sm' | 'xs';
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'white';
  wrapperClassName?: string;
}

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      size = "md",
      color = "primary",
      className,
      wrapperClassName,
      style,
      ...props
    },
    ref
  ): JSX.Element => {

    const spinnerClasses = twMerge(
      'inline-block rounded-full animate-spin',
      className,
      clsx({
        'h-10 w-10 border-4': size === 'lg',
        'h-6 w-6 border-[0.188rem]': size === 'md',
        'h-5 w-5 border-2': size === 'sm',
        'h-4 w-4 border-2': size === 'xs',
        'border-[#5324513b] text-gray-400 border-t-slate-700': color === 'primary',
        'text-secondary border-[#4c3e4b3b] border-t-shades-100': color === 'secondary',
        'text-info border-[#796e783b] border-t-shades-200': color === 'info',
        'text-white border-[#796e783b] border-t-shades-700': color === 'white',
        'text-success border-[#37b24e3b] border-t-success-100': color === 'success',
      })
    )

    return (
      <div
        className={twMerge(
          "flex items-center",
          wrapperClassName
        )}
        ref={ref}
      >
        <div
          {...props}
          className={spinnerClasses}
          style={style}
        />
      </div>
    )
  }
)

Spinner.displayName = 'Spinner'

export default Spinner