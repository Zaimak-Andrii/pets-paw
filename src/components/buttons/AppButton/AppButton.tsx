import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type VariantType = 'primary' | 'secondary' | 'tertiary';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: VariantType;
};

const getVariant = (variant: VariantType) => {
  switch (variant) {
    case 'secondary':
      return 'component-rose';
    case 'tertiary':
      return 'component-gray';
    default:
      return 'component-white';
  }
};

export default function AppButton({ children, className, variant = 'primary', ...props }: Props) {
  return (
    <button
      type="button"
      className={twMerge(
        `${getVariant(
          variant
        )} flex justify-center items-center gap-[10px] p-[10px] text-[12px]/[16px]`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}