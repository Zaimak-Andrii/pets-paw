'use client';

import { useParams } from 'next/navigation';
import useSWR from 'swr';
import Breadcrumb from '../Breadcrumb';
import { getBreedInfoByIdService, getBreedsImagesService } from '@/services/api';
import BreedInfoSwiper from './BreedInfoSwiper';

export default function BreedInfo() {
  const { breedId } = useParams();
  const { data: info } = useSWR(['breed', breedId], () =>
    getBreedInfoByIdService(breedId as string)
  );
  const { data: images = [] } = useSWR(['images', '5', 'asc', breedId], () =>
    getBreedsImagesService({ limit: '5', order: 'asc,', breed: breedId as string })
  );

  return (
    <section className="flex flex-col gap-[20px] w-full h- h-full p-[20px] overflow-hidden bg-white rounded-[20px]">
      <Breadcrumb />
      <div className="flex flex-col flex-grow gap-[52px] w-full">
        <div className="relative flex-shrink-0 w-full h-[360px] rounded-[20px] skeleton">
          {info && <BreedInfoSwiper name={info.name} images={images} />}
        </div>
        <div className="relative px-[60px] pt-[26px] py-[40px] border-2 border-rose rounded-[20px]">
          <h2 className="absolute top-0 left-1/2 w-max px-[40px] py-[5px] text-dark font-medium text-[36px]/[normal] bg-white rounded-[20px] -translate-x-1/2 -translate-y-1/2">
            {info?.name}
          </h2>
          <h3 className="w-fit mx-auto mb-[20px] text-[20px]/[normal] font-medium">
            {info?.bred_for ?? 'Family companion cat'}
          </h3>
          <div className="flex gap-[20px] text-[16px]/[normal]">
            <div className="flex-grow w-full">
              <p className="text-dark font-medium">Temperament:</p>
              <p>{info?.temperament}</p>
            </div>
            <ul className="flex flex-col gap-[10px] flex-grow w-full">
              <li>
                <p>
                  <span className="text-dark font-medium">Origin:</span> {info?.origin}
                </p>
              </li>
              <li>
                <p>
                  <span className="text-dark font-medium">Weight:</span> {info?.weight.metric} kg
                </p>
              </li>
              <li>
                <p>
                  <span className="text-dark font-medium">Life span:</span> {info?.life_span} years
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
