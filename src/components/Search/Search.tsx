'use client';

import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import Breadcrumb from '../Breadcrumb';
import Loader from '../Loader';
import GalleryList from '../GalleryList';
import { searchImagesByBreedNameService } from '@/services/api';

export default function Search() {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get('search');
  const {
    data: images = [],
    isLoading,
    error,
  } = useSWR(searchValue && ['search', searchValue], () =>
    searchImagesByBreedNameService(searchValue as string)
  );

  return (
    <section className="section">
      <Breadcrumb />

      <p className="text-[20px]/[normal]">
        Search results for: <span className="text-dark font-medium">{searchValue}</span>
      </p>

      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full">
          <Loader />
        </div>
      ) : error ? (
        <p className="bg-light px-[20px] py-[18px] text-[16px]/[1.5] rounded-[10px] text-light-red">
          {error.message}
        </p>
      ) : images.length > 0 ? (
        <GalleryList variant="breed" list={images} />
      ) : (
        <p className="bg-light px-[20px] py-[18px] text-[16px]/[1.5] rounded-[10px]">
          No image found
        </p>
      )}
    </section>
  );
}
