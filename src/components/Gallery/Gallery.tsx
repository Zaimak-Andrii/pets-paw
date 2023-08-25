'use client';
import React, { useState } from 'react';
import useSWR from 'swr';
import type { OrderType } from '@/types';
import Breadcrumb from '../Breadcrumb';
import GalleryList from '../GalleryList';
import AppLink from '../AppLink';
import { UploadIcon } from '../icons';
import GalleryFilter from '../GalleryFilter';
import { getGalleryImagesService } from '@/services/api';
import Loader from '../Loader/Loader';

export default function Gallery() {
  const [order, setOrder] = useState<OrderType>('random');
  const [random, setRandom] = useState(() => Date.now());
  const [type, setType] = useState<string | null>(null);
  const [breed, setBreed] = useState('none');
  const [limit, setLimit] = useState('5');

  const {
    data: images = [],
    error,
    isLoading,
  } = useSWR(
    `images?order=${
      order === 'random' ? random : order
    }&type=${type}&breed=${breed}&limit=${limit}`,
    () => getGalleryImagesService(order, type, breed, limit)
  );

  const changeFilterParams = (filterType: 'order' | 'type' | 'breed' | 'limit', value: string) => {
    if (order === 'random') setRandom(Date.now());

    switch (filterType) {
      case 'order':
        return setOrder(value as OrderType);
      case 'type':
        return setType(value);
      case 'breed':
        return setBreed(value);
      case 'limit':
        return setLimit(value);
      default:
        return;
    }
  };

  const refreshHandler = () => {
    setRandom(Date.now());
  };

  return (
    <section className="section">
      <div className="flex items-center justify-between">
        <Breadcrumb />
        <AppLink
          href={`/upload`}
          variant="secondary"
          className="px-[30px] py-[12px] text-[12px]/[16px]"
        >
          <UploadIcon />
          Upload
        </AppLink>
      </div>
      <GalleryFilter onChange={changeFilterParams} onRefresh={refreshHandler} />

      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full">
          <Loader />
        </div>
      ) : error ? (
        <p className="bg-light px-[20px] py-[18px] text-[16px]/[1.5] rounded-[10px] text-light-red">
          {error.message}
        </p>
      ) : images.length > 0 ? (
        <GalleryList list={images} />
      ) : (
        <p className="bg-light px-[20px] py-[18px] text-[16px]/[1.5] rounded-[10px]">
          No image found
        </p>
      )}
    </section>
  );
}
