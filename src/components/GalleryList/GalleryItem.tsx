import Image from 'next/image';
import type { CatType } from '@/types';
import FavouriteButton from '../buttons/FavouriteButton';

type Props = CatType & {
  variant?: 'favourite' | 'breed';
};

export default function GalleryItem({ id, url, breeds, variant }: Props) {
  return (
    <li className="group relative w-full rounded-[20px] overflow-hidden grid-1-8:row-span-2 grid-4-9:row-span-2 grid-4-9:col-span-2 bg-slate-400">
      <Image className="w-full h-full object-cover" src={url} width={200} height={140} alt={url} />

      <div className="absolute left-0 top-0 w-full flex justify-center items-center h-full bg-light-red/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {variant === 'favourite' && <FavouriteButton id={id} />}
        {variant === 'breed' && (
          <p className="absolute bottom-[10px] left-[10px] right-[10px] bg-white px-[20px] py-[5px] text-center text-light-red text-[16px]/[1.5] rounded-[10px] select-none">
            {breeds.at(0)?.name ?? 'No breed'}
          </p>
        )}
      </div>
    </li>
  );
}
