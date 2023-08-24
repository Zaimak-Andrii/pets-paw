'use client';

import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { twMerge } from 'tailwind-merge';
import { useIsActiveRoute } from '@/hooks';

type Props = LinkProps & {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
};

export default function AppLink({
  href,
  className,
  children,
  variant = 'primary',
  ...props
}: Props) {
  const isActive = useIsActiveRoute(href.toString(), true);

  return (
    <Link
      href={href}
      className={twMerge(
        `${
          variant === 'primary' ? 'component-white' : 'component-rose'
        } flex justify-center items-center gap-[10px] p-[10px]`,
        className
      )}
      data-active={isActive}
      {...props}
    >
      {children}
    </Link>
  );
}
