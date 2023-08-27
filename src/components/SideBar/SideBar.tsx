'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '/public/images/logo.svg';
import { Route } from '@/constants/route';
import { Navigation } from '../Navigation';

export default function SideBar() {
  const pathName = usePathname();
  const isHome = pathName === Route.HOME;

  return (
    <aside
      className={`
      fixed left-0 top-0
      ${
        isHome ? 'block' : 'max-desktop:visibility-hidden'
      } flex-grow p-5 w-full desktop:w-[665px] desktop:py-[30px] desktop:pl-[147px] desktop:pr-[72px]`}
    >
      <header className="mb-20">
        <Link href={Route.HOME} className="w-fit block">
          <Image src={logo} alt="Site logo" />
        </Link>
      </header>
      <div>
        <h1 className="mb-[10px] text-dark dark:text-white font-medium text-[44px]/[58px] ">
          Hi!👋
        </h1>
        <p className="mb-[60px] text-[20px]/[normal]">Welcome to MacPaw Bootcamp 2023</p>

        <h2 className="mb-[20px] text-dark dark:text-white font-medium text-[20px]/[normal]">
          Lets start using The Cat API
        </h2>
        <Navigation />
      </div>
    </aside>
  );
}
