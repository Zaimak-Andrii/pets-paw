'use client';

import { ClipLoader } from 'react-spinners';
import { FavoriteIcon, InFavoriteIcon } from '@/components/icons';
import { addToFavoriteService, removeFromeFavoriteService } from '@/services/api';
import AppButton from '../AppButton/AppButton';
import { useIsInFavourite } from '@/hooks/useFavourite';
import { useSWRConfig } from 'swr';
import { useState } from 'react';


type Props = {
  id: string;
};

export default function FavouriteButton({ id }: Props) {
  const favouriteId = useIsInFavourite(id);
  const { mutate } = useSWRConfig();
  const [isLoading, setIsLoading] = useState(false);

  const clickHandler = async () => {
    setIsLoading(true);

    try {
      if (favouriteId) {
        await removeFromeFavoriteService(favouriteId);
      } else {
        await addToFavoriteService(id);
      }

      await mutate(['favourites']);
    } catch (error) {
      console.log((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppButton
      variant="secondary"
      className="bg-white w-[40px] h-[40px] p-[10px]"
      onClick={clickHandler}
      aria-label="Add to favourite button"
      disabled={isLoading}
    >
      {isLoading ? (
        <ClipLoader size={20} color="#FF868E" />
      ) : favouriteId ? (
        <InFavoriteIcon />
      ) : (
        <FavoriteIcon />
      )}
    </AppButton>
  );
}
