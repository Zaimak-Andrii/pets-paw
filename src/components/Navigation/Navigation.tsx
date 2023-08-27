import imageVoting from '/public/images/image-voting.png';
import imageBreeds from '/public/images/image-breeds.png';
import imageGallery from '/public/images/image-gallery.png';
import { Route } from '@/constants/route';
import NavigationItem from './NavigationItem';

type Props = {};

const navItemsList = [
  {
    href: Route.VOTING,
    imageSrc: imageVoting,
    alt: 'Calendar image',
    text: 'Voting',
    color: 'bg-purple',
  },
  {
    href: Route.BREEDS,
    imageSrc: imageBreeds,
    alt: 'Cat image',
    text: 'Breeds',
    color: 'bg-light-green',
  },
  {
    href: Route.GALLERY,
    imageSrc: imageGallery,
    alt: 'Phone image',
    text: 'Gallery',
    color: 'bg-amber',
  },
];

export default function Navigation({}: Props) {
  return (
    <nav>
      <ul className="list-none flex flex-col gap-4 tablet:flex-row">
        {navItemsList.map(item => (
          <NavigationItem key={item.text} {...item} />
        ))}
      </ul>
    </nav>
  );
}
