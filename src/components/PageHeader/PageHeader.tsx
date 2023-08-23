import React from 'react';
import Search from '../Search';
import HeaderNavigation from '../HeaderNavigation';

export default function PageHeader() {
  return (
    <div className="flex gap-[10px]">
      <Search />
      <HeaderNavigation />
    </div>
  );
}
