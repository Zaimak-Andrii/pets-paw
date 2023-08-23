'use client';

import { usePathname } from 'next/navigation';
import BackButton from '../buttons/BackButton';
import AppLink from '../AppLink/AppLink';

export default function Breadcrumb() {
  const pathName = usePathname();
  const routes = pathName.split('/').slice(1);

  return (
    <ul className="flex gap-[10px]">
      <li>
        <BackButton />
      </li>

      {routes.map(route => (
        <li key={route}>
          <AppLink
            href={`/${route}`}
            className="component-rose w-fit px-[30px] py-[5px] h-[40px] rounded-[10px] "
          >
            {route}
          </AppLink>
        </li>
      ))}
    </ul>
  );
}
