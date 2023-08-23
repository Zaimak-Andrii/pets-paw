import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export const useIsActiveRoute = (link: string, exact: boolean = false) => {
  const pathName = usePathname();

  const isActive = useMemo(() => {
    if (exact) {
      const routes = pathName.toLowerCase().split('/').slice(1);

      return routes.at(-1) === link.toLowerCase().slice(1);
    }

    return pathName.toLowerCase().includes(link.toLowerCase());
  }, [pathName, link, exact]);

  return isActive;
};
