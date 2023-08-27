'use client';
import { ReactNode } from 'react';
import PageHeader from '../PageHeader';
import { useIsHomePage } from '@/hooks/useIsHomePage';

type Props = {
  children: ReactNode;
};

export default function Main({ children }: Props) {
  const isHome = useIsHomePage();

  return (
    <main className={`${isHome ? 'max-desktop:visibility-hidden' : ''} ml-auto page`}>
      <PageHeader />
      {children}
    </main>
  );
}
