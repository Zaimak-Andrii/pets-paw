import { getFavoritesService } from '@/services/api';
import useSWR from 'swr';

export const useIsInFavourite = (imageId: string | undefined) => {
  const { data } = useSWR(['favourites'], getFavoritesService);

  return data?.find(i => i.id === imageId)?.favouriteId;
};
