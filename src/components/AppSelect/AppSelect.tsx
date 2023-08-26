import { ChangeEvent } from 'react';
import { twMerge } from 'tailwind-merge';
import type { SelectOptionType } from '@/types';

type Props = {
  name: string;
  options: SelectOptionType[];
  label?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  onChange?: (value: string) => void;
};

export default function AppSelect({
  name,
  label,
  options,
  className,
  variant = 'primary',
  onChange,
}: Props) {
  const changeHandler = (evt: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) onChange(evt.target.value);
  };

  return (
    <label className={twMerge('flex flex-col', className)}>
      {label && <span className="text-[10px]/[1.8] font-medium uppercase">{label}</span>}
      <span
        className={`${
          variant === 'primary' ? 'bg-white text-dark' : 'bg-light text-primary'
        } select`}
      >
        <select
          name={name}
          className={`w-full h-full pl-[10px] pr-[31px] py-[6px] bg-transparent outline-none appearance-none`}
          onChange={changeHandler}
        >
          {options.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </span>
    </label>
  );
}
