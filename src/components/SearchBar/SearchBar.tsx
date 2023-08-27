'use client';

import { FormEvent, useRef } from 'react';
import SearchButton from './SearchButton';
import { useRouter, useSearchParams } from 'next/navigation';
import { Route } from '@/constants/route';

export default function SearchBar() {
  const router = useRouter();
  const params = useSearchParams();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    evt.currentTarget.blur();

    if (!inputRef.current) return;

    router.push(`${Route.SEARCH}?search=${inputRef.current.value}`);
  };

  return (
    <form className="w-full max-desktop:grow max-tablet:order-1" onSubmit={submitHandler}>
      <label className="relative flex justify-center items-center flex-grow bg-white rounded-[20px] overflow-hidden border-transparent border-2 transition-border duration-300 hover-not-focus:border-rose focus-within:border-light-red ">
        <input
          ref={inputRef}
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
