'use client';

import { useSearchParams } from 'next/navigation';
import Breadcrumb from '../Breadcrumb';
import GalleryList from '../GalleryList';
import { searchImagesByBreedNameService } from '@/services/api';

export default function Search() {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get('search');

  return (
    <section className="section">
      <Breadcrumb />

      <p className="text-[20px]/[normal]">
        Search results for: <span className="text-dark font-medium">{searchValue}</span>
      </p>

      <GalleryList
        name="search"
        variant="breed"
        requestFn={searchImagesByBreedNameService}
        options={{ value: searchValue as string }}
      />
    </section>
  );
}
