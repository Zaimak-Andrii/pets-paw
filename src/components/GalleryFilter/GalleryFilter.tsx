'use client';
import React, { FormEvent } from 'react';
import useSWR from 'swr';
import AppSelect from '../AppSelect/AppSelect';
import AppButton from '../buttons/AppButton';
import { RefreshIcon } from '../icons';
import { getAllBreedsService } from '@/services/api';

type Props = {
  onChange: (filterType: 'order' | 'type' | 'breed' | 'limit', value: string) => void;
  onRefresh: () => void;
};

export default function GalleryFilter({ onChange, onRefresh }: Props) {
  const { data: breeds = [] } = useSWR('breeds', getAllBreedsService);

  return (
    <div className="flex flex-col flex-wrap gap-x-[20px] gap-y-[10px] h-[156px] p-[20px] pt-[10px] bg-light rounded-[20px]">
      <AppSelect
        name="order"
        className="flex-grow w-[calc((100%-20px)/2)]"
        label="Order"
        options={[
          { label: 'Random', value: 'random' },
          { label: 'Asc', value: 'asc' },
          { label: 'Desc', value: 'desc' },
        ]}
        onChange={(value: string) => onChange('order', value)}
      />
      <AppSelect
        name="type"
        className="flex-grow w-[calc((100%-20px)/2)]"
        label="Type"
        options={[
          { label: 'All', value: 'jpg,gif,png' },
          { label: 'Static', value: 'jpg,png' },
          { label: 'Animated', value: 'gif' },
        ]}
        onChange={(value: string) => onChange('type', value)}
      />

      <AppSelect
        name="breeds"
        className="flex-grow w-[calc((100%-20px)/2)]"
        label="Breeds"
        options={[
          { label: 'None', value: 'none' },
          ...breeds.map(breed => ({ label: breed.name, value: breed.id })),
        ]}
        onChange={(value: string) => onChange('breed', value)}
      />
      <div className="flex items-end gap-[10px]  w-[calc((100%-20px)/2)]">
        <AppSelect
          name="limit"
          className="flex-grow"
          label="Limit"
          options={[
            { label: '5 items per page', value: '5' },
            { label: '10 items per page', value: '10' },
            { label: '15 items per page', value: '15' },
            { label: '20 items per page', value: '20' },
          ]}
          onChange={(value: string) => onChange('limit', value)}
        />
        <AppButton onClick={onRefresh}>
          <RefreshIcon />
        </AppButton>
      </div>
    </div>
  );
}
