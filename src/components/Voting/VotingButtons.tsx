import React from 'react';
import VotingButton from './VotingButton';
import type { LogMessageType } from '@/types';
import {
  addToDislikeService,
  addToFavoriteService,
  addToLikeService,
  removeFromeFavoriteService,
} from '@/services/api';
import { useIsInFavourite } from '@/hooks/useFavourite';

type Props = {
  imageId: string | undefined;
  onClick: (fn: (id: string) => Promise<void>, action: LogMessageType['action']) => void;
};

export default function VotingButtons({ imageId, onClick }: Props) {
  const favouriteId = useIsInFavourite(imageId);

  return (
    <ul className="absolute left-[50%] bottom-0 flex gap-[4px] w-[186px] tablet:w-[248px] h-[60px] tablet:h-[80px] overflow-hidden bg-white rounded-[12px] tablet:rounded-[22px] outline outline-4 outline-white -translate-x-2/4 translate-y-2/4">
      <li>
        <VotingButton
          variant="like"
          onFetch={() => onClick(addToLikeService, 'like')}
          disabled={!imageId}
        />
      </li>
      <li>
        <VotingButton
          variant={favouriteId ? 'in-favourite' : 'favourite'}
          onFetch={() =>
            onClick(
              favouriteId ? () => removeFromeFavoriteService(favouriteId) : addToFavoriteService,
              favouriteId ? 'remove-favorite' : 'favourite'
            )
          }
          disabled={!imageId}
        />
      </li>
      <li>
        <VotingButton
          variant="dislike"
          onFetch={() => onClick(addToDislikeService, 'dislike')}
          disabled={!imageId}
        />
      </li>
    </ul>
  );
}
