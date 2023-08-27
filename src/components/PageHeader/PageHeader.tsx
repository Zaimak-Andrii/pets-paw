'use client';

import SearchBar from '../SearchBar';
import HeaderNavigation from '../HeaderNavigation';
import { useIsHomePage } from '@/hooks/useIsHomePage';
import MenuButton from '../buttons/MenuButton/MenuButton';

export default function PageHeader() {
  const isHome = useIsHomePage();

  return (
    <header
      className={`flex max-desktop:justify-between max-tablet:flex-wrap gap-[10px] ${
        isHome && 'visibility-hidden'
      }`}
    >
      <MenuButton className="desktop:visibility-hidden px-[15px] py-[21px]" />
      <SearchBar />
      <HeaderNavigation />
    </header>
  );
}
