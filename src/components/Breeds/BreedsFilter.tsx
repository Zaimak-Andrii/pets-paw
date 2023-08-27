import useSWR from 'swr';
import AppSelect from '../AppSelect/AppSelect';
import { getAllBreedsService } from '@/services/api';
import AppButton from '../buttons/AppButton/AppButton';
import { AscIcon, DescIcon } from '../icons';
import { limitOptions } from '@/constants/selectOptions';

type Props = {
  onChange: (filterType: 'order' | 'breed' | 'limit', value: string) => void;
};

export default function BreedsFilter({ onChange }: Props) {
  const { data: breeds = [] } = useSWR('breeds', getAllBreedsService);

  return (
    <div className="flex max-tablet:flex-wrap gap-[10px] w-full">
      <AppSelect
        name="breed"
        className="max-tablet:w-full grow"
        variant="secondary"
        options={[
          { label: 'All breeds', value: 'none' },
          ...breeds.map(breed => ({ label: breed.name, value: breed.id })),
        ]}
        onChange={(value: string) => onChange('breed', value)}
      />

      <AppSelect
        className="max-tablet:grow"
        name="limit"
        variant="secondary"
        options={limitOptions}
        onChange={(value: string) => onChange('limit', value)}
      />

      <AppButton
        variant="tertiary"
        className="w-[40px] h-[40px]"
        onClick={() => onChange('order', 'desc')}
      >
        <DescIcon />
      </AppButton>

      <AppButton
        variant="tertiary"
        className="w-[40px] h-[40px]"
        onClick={() => onChange('order', 'asc')}
      >
        <AscIcon />
      </AppButton>
    </div>
  );
}
