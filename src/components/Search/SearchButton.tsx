import { HTMLAttributes } from 'react';
import { SearchIcon } from '../icons';
import { twMerge } from 'tailwind-merge';

export default function SearchButton({ className, ...props }: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={twMerge(
        'flex justify-center items-center w-[40px] h-[40px] p-[10px] component-rose',
        className
      )}
      type="submit"
      {...props}
    >
      <SearchIcon />
    </button>
  );
}
