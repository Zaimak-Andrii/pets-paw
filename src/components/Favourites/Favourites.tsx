'use client';

import Breadcrumb from '../Breadcrumb';
import { getFavoritesService } from '@/services/api';
import GalleryList from '../GalleryList';

export default function Gallery() {
  return (
    <section className="section">
      <Breadcrumb />
      <GalleryList name="favourites" requestFn={getFavoritesService} />
    </section>
  );
}
