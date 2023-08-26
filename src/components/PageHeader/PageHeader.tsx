'use client';

import { usePathname } from 'next/navigation';
import Search from '../SearchBar';
import HeaderNavigation from '../HeaderNavigation';
import { Route } from '@/constants/route';

export default function PageHeader() {
  const pathName = usePathname();
  const isMainPage = pathName === Route.HOME;

  return (
    <header className={`flex gap-[10px] ${isMainPage && 'visibility-hidden'}`}>
      <Search />
      <HeaderNavigation />
    </header>
  );
}
