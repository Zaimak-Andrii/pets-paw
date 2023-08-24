'use client';

import { FavoriteIcon } from '@/components/icons';
import { addToFavoriteService } from '@/services/api';

type Props = {
  id: string;
};

export default function FavouriteButton({ id }: Props) {
  const clickHandler = async () => {
    await addToFavoriteService(id);
  };

  return (
    <button className="component-white w-[40px] h-[40px] p-[10px]" onClick={clickHandler}>
      <FavoriteIcon />
    </button>
  );
}
