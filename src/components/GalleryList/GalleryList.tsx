'use client';

import useSWR from 'swr';
import type { CatType } from '@/types';
import GalleryItem from './GalleryItem';
import Loader from '../Loader';
import Message from '../Message/Message';
import { ErrorIcon } from '../icons';
import { ErrorMessage } from '../Message';

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

  console.log([name, ...Object.values(options ?? {})]);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full">
          <Loader />
        </div>
      ) : error ? (
        <ErrorMessage>{error.message}</ErrorMessage>
      ) : list.length > 0 ? (
        <ul className="mx-[-20px] px-[20px] grid h-[calc(100%-60px)] grid-cols-3 auto-rows-[140px] gap-[20px] overflow-y-auto ">
          {list.map((image: CatType) => (
            <GalleryItem key={image.id} {...image} variant={variant} />
          ))}
        </ul>
      ) : (
        <Message>No image found</Message>
      )}
    </>
  );
}
