'use client';
import { useState } from 'react';
import useSWR from 'swr';
import Breadcrumb from '../Breadcrumb';
import GalleryList from '../GalleryList';
import { getBreedsImagesService } from '@/services/api';
import Loader from '../Loader';
import type { OrderType } from '@/types';
import BreedsFilter from './BreedsFilter';

export default function Breeds() {
  const [order, setOrder] = useState<OrderType>('asc');
  const [breed, setBreed] = useState('none');
  const [limit, setLimit] = useState('5');

  const {
    data: images = [],
    error,
    isLoading,
  } = useSWR(`images?order=${order}&breed=${breed}&limit=${limit}`, () =>
    getBreedsImagesService(order, breed, limit)
  );

  const changeFilterParams = (filterType: 'order' | 'breed' | 'limit', value: string) => {
    switch (filterType) {
      case 'order':
        return setOrder(value as OrderType);

      case 'breed':
        return setBreed(value);
      case 'limit':
        return setLimit(value);
      default:
        return;
    }
  };

  return (
    <section className="flex flex-col gap-[20px] w-full h- h-full p-[20px] overflow-hidden bg-white rounded-[20px]">
      <div className="flex gap-[10px]">
        <Breadcrumb />
        <BreedsFilter onChange={changeFilterParams} />
      </div>

      {isLoading && (
        <div className="flex justify-center items-center w-full h-full">
          <Loader />
        </div>
      )}

      {isLoading ? null : error ? (
        <p className="bg-light px-[20px] py-[18px] text-[16px]/[1.5] rounded-[10px] text-light-red">
          {error.message}
        </p>
      ) : images.length > 0 ? (
        <GalleryList list={images} variant="breed" />
      ) : (
        <p className="bg-light px-[20px] py-[18px] text-[16px]/[1.5] rounded-[10px]">
          No image found
        </p>
      )}
    </section>
  );
}
