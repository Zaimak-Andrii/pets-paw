import React from 'react';
import VotingButton from './VotingButton';
import type { LogMessageType } from '@/types';
import { addToDislikeService, addToFavoriteService, addToLikeService } from '@/services/api';

type Props = {
  onClick: (fn: (id: string) => Promise<void>, action: LogMessageType['action']) => void;
};

export default function VotingButtons({ onClick }: Props) {
  return (
    <ul className="absolute left-[50%] bottom-0 flex gap-[4px] w-[248px] h-[80px] overflow-hidden bg-white rounded-[22px] outline outline-4 outline-white -translate-x-2/4 translate-y-2/4">
      <VotingButton variant="like" onClick={() => onClick(addToLikeService, 'like')} />
      <VotingButton
        variant="favourite"
        onClick={() => onClick(addToFavoriteService, 'favourite')}
      />
      <VotingButton variant="dislike" onClick={() => onClick(addToDislikeService, 'dislike')} />
    </ul>
  );
}
