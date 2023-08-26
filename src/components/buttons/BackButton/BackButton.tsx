'use client';

import { LeftArrowIcon } from '@/components/icons';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const { back } = useRouter();

  return (
    <button
      className="component-rose w-[40px] h-[40px] p-[10px]"
      type="button"
      data-active={false}
      onClick={back}
      aria-label="Back to previous page"
    >
      {<LeftArrowIcon />}
    </button>
  );
}
