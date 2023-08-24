import React from 'react';
import type { CatType } from '@/types';

import GalleryItem from './GalleryItem';

type Props = {
  list: CatType[];
  variant?: 'favourite' | 'breed';
};

export default function GalleryList({ list, variant = 'favourite' }: Props) {
  return (
    <ul className="mx-[-20px] px-[20px] grid h-[calc(100%-60px)] grid-cols-3 auto-rows-[140px] gap-[20px] overflow-y-auto ">
      {list.map(image => (
        <GalleryItem key={image.id} {...image} variant={variant} />
      ))}
    </ul>
  );
}
