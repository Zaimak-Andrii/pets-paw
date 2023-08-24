import React, { ChangeEvent } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  name: string;
  options: {
    label: string;
    value: string;
  }[];
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
        className={`flex items-center h-[40px] pr-[10px] ${
          variant === 'primary' ? 'bg-white text-dark' : 'bg-light text-primary'
        }  rounded-[10px] border-2 border-transparent transition-border duration-300 hover:border-rose`}
      >
        <select
          name={name}
          className={`w-full h-full px-[10px] py-[6px] text-[16px]/[1.5] bg-transparent outline-none`}
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
