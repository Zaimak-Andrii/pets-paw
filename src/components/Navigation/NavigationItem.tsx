'use client';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { useIsActiveRoute } from '@/hooks';

type Props = {
  href: string;
  imageSrc: StaticImageData;
  alt: string;
  text: string;
  color: string;
};

export default function NavigationItem({ href, imageSrc, text, color, alt }: Props) {
  const isActive = useIsActiveRoute(href);

  return (
    <li className="group w-[138px]" data-active={isActive}>
      <Link href={href}>
        <div
          className={`h-[198px] mb-[10px] ${color} rounded-[20px] border-4 border-white border-opacity-60 transition-border duration-300 group-hover:border-opacity-100 group-data-[active='true']:border-rose`}
        >
          <Image src={imageSrc} alt={alt} />
        </div>
        <p className="text-[12px]/[16px] text-center py-[10px] component-default ">{text}</p>
      </Link>
    </li>
  );
}
