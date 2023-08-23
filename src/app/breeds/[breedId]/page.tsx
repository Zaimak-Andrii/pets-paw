import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import React from 'react';

type Props = {};

export default function BreedInfo({}: Props) {
  return (
    <section className="page">
      <PageHeader />
      <section className="w-full h- h-full p-[20px] overflow-hidden bg-white rounded-[20px]">
        <Breadcrumb />
      </section>
    </section>
  );
}
