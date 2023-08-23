import React from 'react';
import Search from '../Search';
import AppLink from '../AppLink';
import { Route } from '@/constants/route';
import { DislikeIcon, FavoriteIcon, LikeIcon } from '../icons';

export default function PageHeader() {
  return (
    <div className="flex gap-[10px]">
      <Search />
      <ul className="flex gap-[10px]">
        <li>
          <AppLink href={Route.LIKES}>
            <LikeIcon />
          </AppLink>
        </li>
        <li>
          <AppLink href={Route.FAVOURITES}>
            <FavoriteIcon />
          </AppLink>
        </li>
        <li>
          <AppLink href={Route.DISLIKES}>
            <DislikeIcon />
          </AppLink>
        </li>
      </ul>
    </div>
  );
}
