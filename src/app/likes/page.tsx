import React from 'react';
import Search from '../../components/Search';
import AppLink from '../../components/AppLink/AppLink';
import { DislikeIcon, FavoriteIcon, LikeIcon } from '../../components/icons';
import { Route } from '@/constants/route';

type Props = {};

export default function LikesPage({}: Props) {
  return (
    <div>
      <Search />
      <ul className="flex">
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
