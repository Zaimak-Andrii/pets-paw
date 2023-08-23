'use client';

import { FormEvent } from 'react';
import SearchButton from './SearchButton';

type Props = {};

export default function Search({}: Props) {
  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    evt.currentTarget.blur();
  };
  return (
    <form className="w-full" onSubmit={submitHandler}>
      <label className="relative flex justify-center items-center flex-grow bg-white rounded-[20px] overflow-hidden border-transparent border-2 transition-border duration-300 hover-not-focus:border-rose focus-within:border-light-red ">
        <input
          className="flex-grow h-full px-[18px] py-[13px] text-[20px]/[1.5] bg-transparent outline-none"
          type="text"
          name="search"
          placeholder="Search for breeds by name"
        />
        <SearchButton className="mr-[10px]" />
      </label>
    </form>
  );
}
