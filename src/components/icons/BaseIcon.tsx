import type { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export default function BaseIcon({ className, children }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={twMerge('flex justify-center items-center w-full h-full ', className)}>
      {children}
    </span>
  );
}
