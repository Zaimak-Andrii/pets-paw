import { usePathname } from 'next/navigation';
import { Route } from '@/constants/route';

export const useIsHomePage = () => {
  const pathName = usePathname();

  return pathName === Route.HOME;
};
