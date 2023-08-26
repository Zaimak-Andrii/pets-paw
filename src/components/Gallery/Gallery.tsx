'use client';
import { useState } from 'react';
import type { OrderType } from '@/types';
import Breadcrumb from '../Breadcrumb';
import GalleryList from '../GalleryList';
import GalleryFilter from '../GalleryFilter';
import { getGalleryImagesService } from '@/services/api';
import UploadButton from '../buttons/UploadButton';

export default function Gallery() {
  const [order, setOrder] = useState<OrderType>('random');
  const [random, setRandom] = useState(() => Date.now().toString());
  const [type, setType] = useState('');
  const [breed, setBreed] = useState('none');
  const [limit, setLimit] = useState('5');

  const changeFilterParams = (filterType: 'order' | 'type' | 'breed' | 'limit', value: string) => {
    if (order === 'random') setRandom(Date.now().toString());

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
    if (order !== 'random') return;

    setRandom(Date.now().toString());
  };

  return (
    <section className="section">
      <div className="flex items-center justify-between">
        <Breadcrumb />
        <UploadButton className="px-[30px] py-[12px] text-[12px]/[16px]" />
      </div>

      <GalleryFilter onChange={changeFilterParams} onRefresh={refreshHandler} />

      <GalleryList
        name="images"
        variant="favourite"
        requestFn={getGalleryImagesService}
        options={{ limit, order, breed, type, random }}
      />
    </section>
  );
}
