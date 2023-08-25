import { HTMLAttributes, createElement } from 'react';
import type { VotingIconType } from '@/types';
import { getVotingIcon } from '@/helpers';

type Props = HTMLAttributes<HTMLButtonElement> & {
  variant: VotingIconType;
};

const variantStyles: Record<VotingIconType, string> = {
  like: 'bg-light-green  hover:bg-light-green/30 hover:text-light-green',
  dislike: 'bg-amber hover:bg-amber/30 hover:text-amber',
  favourite: 'bg-light-red  hover:bg-light-red/30 hover:text-light-red',
};

export default function VotingButton({ variant, className, ...props }: Props) {
  return (
    <button
      type="button"
      className={`h-full p-[25px] text-white transition-colors duration-300 ${variantStyles[variant]}`}
      {...props}
    >
      {createElement(getVotingIcon(variant))}
    </button>
  );
}
