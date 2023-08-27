import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { CatType } from '@/types';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.css';
import Image from 'next/image';

type Props = {
  name: string;
  images: CatType[];
};

export default function BreedInfoSwiper({ images, name }: Props) {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="w-full h-full rounded-[20px]"
    >
      {images?.map(image => (
        <SwiperSlide key={image.id}>
          <Image
            className="w-full h-full object-cover "
            src={image.url}
            alt={name}
            width={640}
            height={360}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
