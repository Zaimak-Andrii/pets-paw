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
  selectClass?: string;
  onChange?: (value: string) => void;
};

export default function AppSelect({
  name,
  label,
  options,
  className,
  selectClass,
  onChange,
}: Props) {
  const changeHandler = (evt: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) onChange(evt.target.value);
  };

  return (
    <label className={twMerge('flex flex-col', className)}>
      {label && <span className="text-[10px]/[1.8] font-medium uppercase">{label}</span>}
      <select
        name={name}
        className={twMerge(
          'h-[40px] px-[10px] py-[8px] bg-white rounded-[10px] text-dark text-[16px]/[1.5]',
          selectClass
        )}
        onChange={changeHandler}
      >
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
}
