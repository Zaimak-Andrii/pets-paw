'use client';

import { getDislikesService } from '@/services/api';
import Breadcrumb from '../Breadcrumb';
import GalleryList from '../GalleryList';

export default function Dislikes() {
  return (
    <section className="section">
      <Breadcrumb />
      <GalleryList name="dislikes" variant="none" requestFn={getDislikesService} />
    </section>
  );
}
