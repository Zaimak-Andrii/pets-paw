import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'PetsPaw | Gallery',
  description: 'Pets gallery',
};

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
