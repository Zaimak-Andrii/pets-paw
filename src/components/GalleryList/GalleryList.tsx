'use client';

import useSWR from 'swr';
import type { CatType } from '@/types';
import GalleryItem from './GalleryItem';
import Loader from '../Loader';

type GalleryOptionsType = { [key: string]: string };
type Props = {
  name: string;
  requestFn: (...options: GalleryOptionsType[]) => Promise<CatType[]>;
  variant?: 'favourite' | 'breed' | 'none';
  options?: GalleryOptionsType;
};

export default function GalleryList({ name, variant = 'favourite', requestFn, options }: Props) {
  const {
    data: list = [],
    isLoading,
    error,
  } = useSWR([name, ...Object.values(options ?? {})], () =>
    options ? requestFn(options) : requestFn()
  );

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full">
          <Loader />
        </div>
      ) : error ? (
        <p className="bg-light px-[20px] py-[18px] text-[16px]/[1.5] rounded-[10px] text-light-red">
          {error.message}
        </p>
      ) : list.length > 0 ? (
        <ul className="mx-[-20px] px-[20px] grid h-[calc(100%-60px)] grid-cols-3 auto-rows-[140px] gap-[20px] overflow-y-auto ">
          {list.map((image: CatType) => (
            <GalleryItem key={image.id} {...image} variant={variant} />
          ))}
        </ul>
      ) : (
        <p className="bg-light px-[20px] py-[18px] text-[16px]/[1.5] rounded-[10px]">
          No image found
        </p>
      )}
    </>
  );
}
