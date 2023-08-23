'use client';

import React, { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { twMerge } from 'tailwind-merge';
import { useIsActiveRoute } from '@/hooks';

export default function AppLink({
  href,
  className,
  children,
  ...props
}: LinkProps & { className?: string; children: ReactNode }) {
  const isActive = useIsActiveRoute(href.toString(), true);

  return (
    <Link
      href={href}
      className={twMerge(
        'flex justify-center items-center component-white w-[60px] h-[60px] p-[15px] text-[20px]/[1.5] rounded-[20px]',
        className
      )}
      data-active={isActive}
      {...props}
    >
      {children}
    </Link>
  );
}
