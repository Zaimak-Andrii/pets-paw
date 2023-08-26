'use client';

import { getLikesService } from '@/services/api';
import Breadcrumb from '../Breadcrumb';
import GalleryList from '../GalleryList';

export default function Likes() {
  return (
    <section className="section">
      <Breadcrumb />
      <GalleryList name="likes" variant="none" requestFn={getLikesService} />
    </section>
  );
}
