import { DislikeIcon, FavoriteIcon, LikeIcon } from '@/components/icons';
import type { VotingIconType } from '@/types';

export const getVotingIcon = (action: VotingIconType) => {
  const icons: Record<typeof action, typeof LikeIcon> = {
    like: LikeIcon,
    dislike: DislikeIcon,
    favourite: FavoriteIcon,
  };

  return icons[action];
};
