import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/images/logo.svg';
import imageVoting from '/public/images/image-voting.png';
import imageBreeds from '/public/images/image-breeds.png';
import imageGallery from '/public/images/image-gallery.png';
import { Route } from '@/constants/route';

type Props = {};

export default function Navigation({}: Props) {
  return (
    <aside className="p-5 xl:w-[665px] xl:py-[30px] xl:pl-[147px] xl:pr-[72px]">
      <header className="xl:mb-20">
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
        <nav>
          <ul className="list-none flex gap-4">
            <li className="group w-[138px]">
              <Link href={Route.VOTING}>
                <div className="h-[198px] mb-[10px] bg-purple rounded-[20px] border-4 border-white border-opacity-60 transition-border duration-300 group-hover:border-opacity-100">
                  <Image src={imageVoting} alt="Calendar image" />
                </div>
                <p className="text-[12px]/[16px] tracking-[2px] text-center text-light-red uppercase py-[10px] rounded-[10px] bg-white transition-colors duration-300 group-hover:bg-rose">
                  Voting
                </p>
              </Link>
            </li>
            <li className="group w-[138px] ">
              <Link href={Route.BREEDS}>
                <div className="h-[198px] mb-[10px] bg-light-green rounded-[20px] border-4 border-white border-opacity-60 transition-border duration-300 group-hover:border-opacity-100">
                  <Image src={imageBreeds} alt="Cat image" />
                </div>
                <p className="text-[12px]/[16px] tracking-[2px] text-center text-light-red uppercase py-[10px] rounded-[10px] bg-white transition-colors duration-300 group-hover:bg-rose">
                  Breeds
                </p>
              </Link>
            </li>
            <li className="group w-[138px]">
              <Link href={Route.GALLERY}>
                <div className="h-[198px] mb-[10px] bg-amber rounded-[20px] border-4 border-white border-opacity-60 transition-border duration-300 group-hover:border-opacity-100">
                  <Image src={imageGallery} alt="Phone image" />
                </div>
                <p className="text-[12px]/[16px] tracking-[2px] text-center text-light-red uppercase py-[10px] rounded-[10px] bg-white transition-colors duration-300 group-hover:bg-rose">
                  Gallery
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
