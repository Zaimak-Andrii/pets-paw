import { createElement } from 'react';
import type { LogMessageType } from '@/types';
import { DislikeIcon, FavoriteIcon, LikeIcon } from '../icons';

const actionMessage: Record<LogMessageType['action'], string> = {
  like: 'was added to Likes',
  dislike: 'was added to Dislikes',
  favourite: 'was added to Favourites',
  'remove-favorite': 'was removed from Favourites',
};

const getActionIcon = (action: LogMessageType['action']) => {
  if (action === 'remove-favorite') return null;

  const icons: Record<typeof action, typeof LikeIcon> = {
    like: LikeIcon,
    dislike: DislikeIcon,
    favourite: FavoriteIcon,
  };

  const iconColor: Record<typeof action, string> = {
    like: 'text-light-green',
    dislike: 'text-amber',
    favourite: 'text-light-red',
  };

  return createElement(icons[action], {
    className: `w-[20px] h-[20px] ml-auto ${iconColor[action]}`,
  });
};

export default function LogItem({ time, imageId, action }: LogMessageType) {
  return (
    <li className="flex items-center p-[15px] bg-light rounded-[10px]">
      <p>
        <span className="mr-[20px] px-[10px] py-[3px] text-dark bg-white rounded-[5px]">
          {time}
        </span>
        <span>
          Image ID: <span className="font-medium text-dark">{imageId}</span> {actionMessage[action]}
        </span>
      </p>
      {action !== 'remove-favorite' && getActionIcon(action)}
    </li>
  );
}
