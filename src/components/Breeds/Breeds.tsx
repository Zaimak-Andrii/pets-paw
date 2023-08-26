'use client';
import { useState } from 'react';
import Breadcrumb from '../Breadcrumb';
import GalleryList from '../GalleryList';
import { getBreedsImagesService } from '@/services/api';
import type { OrderType } from '@/types';
import BreedsFilter from './BreedsFilter';

export default function Breeds() {
  const [order, setOrder] = useState<OrderType>('asc');
  const [breed, setBreed] = useState('none');
  const [limit, setLimit] = useState('5');

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
    <section className="section">
      <div className="flex gap-[10px]">
        <Breadcrumb />
        <BreedsFilter onChange={changeFilterParams} />
      </div>

      <GalleryList
        name="images"
        variant="breed"
        requestFn={getBreedsImagesService}
        options={{ limit, order, breed }}
      />
    </section>
  );
}
