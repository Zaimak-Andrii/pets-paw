import AppLink from '../AppLink';
import { Route } from '@/constants/route';
import { DislikeIcon, FavoriteIcon, LikeIcon } from '../icons';

const routes = [
  { route: Route.LIKES, icon: <LikeIcon />, aria: 'Like link' },
  { route: Route.FAVOURITES, icon: <FavoriteIcon />, aria: 'Favourite link' },
  { route: Route.DISLIKES, icon: <DislikeIcon />, aria: 'Dislike link' },
];

export default function HeaderNavigation() {
  return (
    <ul className="flex gap-[10px]">
      {routes.map(({ route, icon, aria }) => (
        <li key={route}>
          <AppLink
            href={route}
            className="w-[60px] h-[60px] p-[15px] rounded-[20px]"
            aria-label={aria}
          >
            {icon}
          </AppLink>
        </li>
      ))}
    </ul>
  );
}
