'use client';

import useSWR from 'swr';
import AppSelect from '../AppSelect/AppSelect';
import AppButton from '../buttons/AppButton';
import { RefreshIcon } from '../icons';
import { getAllBreedsService } from '@/services/api';
import { limitOptions, orderOptions, typeOptions } from '@/constants/selectOptions';

type Props = {
  onChange: (filterType: 'order' | 'type' | 'breed' | 'limit', value: string) => void;
  onRefresh: () => void;
};

export default function GalleryFilter({ onChange, onRefresh }: Props) {
  const { data: breeds = [] } = useSWR('breeds', getAllBreedsService);

  return (
    <div className="flex flex-col tablet:flex-wrap gap-x-[20px] gap-y-[10px] tablet:h-[156px] p-[20px] pt-[10px] bg-light rounded-[20px]">
      <AppSelect
        name="order"
        className="grow tablet:w-[calc((100%-20px)/2)]"
        label="Order"
        options={orderOptions}
        onChange={(value: string) => onChange('order', value)}
      />

      <AppSelect
        name="type"
        className="grow tablet:w-[calc((100%-20px)/2)]"
        label="Type"
        options={typeOptions}
        onChange={(value: string) => onChange('type', value)}
      />

      <AppSelect
        name="breeds"
        className="grow tablet:w-[calc((100%-20px)/2)]"
        label="Breeds"
        options={[
          { label: 'None', value: 'none' },
          ...breeds.map(breed => ({ label: breed.name, value: breed.id })),
        ]}
        onChange={(value: string) => onChange('breed', value)}
      />

      <div className="flex max-tablet:flex-col tablet:items-end gap-[10px]  tablet:w-[calc((100%-20px)/2)]">
        <AppSelect
          name="limit"
          className="grow "
          label="Limit"
          options={limitOptions}
          onChange={(value: string) => onChange('limit', value)}
        />

        <AppButton
          variant="secondary"
          onClick={onRefresh}
          className="bg-white"
          aria-label="Refresh images"
        >
          <RefreshIcon className="w-[20px] h-[20px]" />
        </AppButton>
      </div>
    </div>
  );
}
