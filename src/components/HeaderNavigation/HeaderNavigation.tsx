import AppLink from '../AppLink';
import { Route } from '@/constants/route';
import { DislikeIcon, FavoriteIcon, LikeIcon } from '../icons';

const routes = [
  { route: Route.LIKES, icon: <LikeIcon /> },
  { route: Route.FAVOURITES, icon: <FavoriteIcon /> },
  { route: Route.DISLIKES, icon: <DislikeIcon /> },
];

export default function HeaderNavigation() {
  return (
    <ul className="flex gap-[10px]">
      {routes.map(({ route, icon }) => (
        <li key={route}>
          <AppLink href={route} className="w-[60px] h-[60px] p-[15px] rounded-[20px]">
            {icon}
          </AppLink>
        </li>
      ))}
    </ul>
  );
}
