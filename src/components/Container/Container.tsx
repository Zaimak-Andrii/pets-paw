import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Container({ children, className }: HTMLAttributes<HTMLDivElement>) {
  const styles = twMerge('container h-full mx-auto', className);
  return <div className={styles}>{children}</div>;
}
