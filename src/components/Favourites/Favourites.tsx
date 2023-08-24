'use client';
import useSWR from 'swr';
import Breadcrumb from '../Breadcrumb';
import GalleryList from '../GalleryList';
import { getFavoritesService } from '@/services/api';
import Loader from '../Loader';

export default function Gallery() {
  const { data: images = [], error, isLoading } = useSWR(`favourites`, getFavoritesService);

  console.log(images);

  return (
    <section className="flex flex-col gap-[20px] w-full h- h-full p-[20px] overflow-hidden bg-white rounded-[20px]">
      <Breadcrumb />

      {error ? (
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

      {isLoading && (
        <div className="flex justify-center items-center w-full h-full">
          <Loader />
        </div>
      )}
    </section>
  );
}
