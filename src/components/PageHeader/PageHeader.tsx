'use client';

import SearchBar from '../SearchBar';
import HeaderNavigation from '../HeaderNavigation';
import AppButton from '../buttons/AppButton/AppButton';
import { MenuIcon } from '../icons';
import { useIsHomePage } from '@/hooks/useIsHomePage';

export default function PageHeader() {
  const isHome = useIsHomePage();

  return (
    <header
      className={`flex max-desktop:justify-between max-tablet:flex-wrap gap-[10px] ${
        isHome && 'visibility-hidden'
      }`}
    >
      <AppButton className="desktop:visibility-hidden px-[15px] py-[21px]">
        <MenuIcon className="w-[30px] h-[18px]" />
      </AppButton>
      <SearchBar />
      <HeaderNavigation />
    </header>
  );
}
