'use client';

import useSWR from 'swr';
import { getLikesService } from '@/services/api';
import Breadcrumb from '../Breadcrumb';
import GalleryList from '../GalleryList';
import Loader from '../Loader/Loader';

export default function Likes() {
  const { data: images = [], isLoading, error } = useSWR('likes', getLikesService);

  return (
    <section className="section">
      <Breadcrumb />

      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full">
          <Loader />
        </div>
      ) : error ? (
        <p className="bg-light px-[20px] py-[18px] text-[16px]/[1.5] rounded-[10px] text-light-red">
          {error.message}
        </p>
      ) : images.length > 0 ? (
        <GalleryList variant="none" list={images} />
      ) : (
        <p className="bg-light px-[20px] py-[18px] text-[16px]/[1.5] rounded-[10px]">
          No image found
        </p>
      )}
    </section>
  );
}
