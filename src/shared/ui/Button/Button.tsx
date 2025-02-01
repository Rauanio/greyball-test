import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import { Spinner } from '../Spinner';
import { ButtonVartiants, mapButtonVariants } from './ButtonVariants';
import { ButtonSizes, mapButtonSizes } from './ButtonSizes';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  variant?: ButtonVartiants;
  size?: ButtonSizes;
  isLoading?: boolean;
}

export const Button = ({
  children,
  className,
  isLoading = false,
  size = 'sm',
  variant = 'primary',
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      type='button'
      {...otherProps}
      className={clsx(
        'rounded-lg font-semibold shadow-medium transition-colors flex items-center justify-center gap-1',
        [mapButtonSizes[size], mapButtonVariants[variant], className]
      )}
    >
      {isLoading && <Spinner className={'w-5 h-5'} />}
      {children}
    </button>
  );
};
