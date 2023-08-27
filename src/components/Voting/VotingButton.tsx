import { ButtonHTMLAttributes, createElement, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import type { VotingIconType } from '@/types';
import { getVotingIcon } from '@/helpers';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  onFetch: () => void;
  variant: VotingIconType;
};

const variantStyles: Record<VotingIconType, string> = {
  like: 'bg-light-green  hover-not-disabled:bg-light-green/30 hover-not-disabled:text-light-green',
  dislike: 'bg-amber hover-not-disabled:bg-amber/30 hover-not-disabled:text-amber',
  favourite: 'bg-light-red  hover-not-disabled:bg-light-red/30 hover-not-disabled:text-light-red',
  'in-favourite':
    'bg-light-red  hover-not-disabled:bg-light-red/30 hover-not-disabled:text-light-red',
};

export default function VotingButton({ variant, className, onFetch, disabled, ...props }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const clickHandler = async () => {
    setIsLoading(true);

    try {
      await onFetch();
    } catch (error) {
      console.log((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      className={`flex justify-center items-center w-[60px] tablet:w-[80px] h-[60px] tablet:h-[80px] p-[18px] tablet:p-[25px] text-white transition-colors duration-300 ${variantStyles[variant]} disabled:cursor-not-allowed`}
      onClick={clickHandler}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <ClipLoader size={24} color="#FFFFFF" />
      ) : (
        createElement(getVotingIcon(variant), { className: 'w-[30px] h-[30px]' })
      )}
    </button>
  );
}
