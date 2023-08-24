'use client';

import { FavoriteIcon } from '@/components/icons';
import { addToFavoriteService } from '@/services/api';
import AppButton from '../AppButton/AppButton';

type Props = {
  id: string;
};

export default function FavouriteButton({ id }: Props) {
  const clickHandler = async () => {
    await addToFavoriteService(id);
  };

  return (
    <AppButton
      variant="secondary"
      className="bg-white w-[40px] h-[40px] p-[10px]"
      onClick={clickHandler}
    >
      <FavoriteIcon />
    </AppButton>
  );
}
