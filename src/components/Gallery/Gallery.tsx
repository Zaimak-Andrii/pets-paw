import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

type Props = {};

export default function Gallery({}: Props) {
  return (
    <section className="w-full h- h-full p-[20px] overflow-hidden bg-white rounded-[20px]">
      <Breadcrumb />
    </section>
  );
}
