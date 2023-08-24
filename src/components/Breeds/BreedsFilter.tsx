import useSWR from 'swr';
import AppSelect from '../AppSelect/AppSelect';
import { getAllBreedsService } from '@/services/api';
import AppButton from '../buttons/AppButton/AppButton';
import { AscIcon, DescIcon } from '../icons';

type Props = {
  onChange: (filterType: 'order' | 'breed' | 'limit', value: string) => void;
};

export default function BreedsFilter({ onChange }: Props) {
  const { data: breeds = [] } = useSWR('breeds', getAllBreedsService);

  return (
    <div className="flex gap-[10px] w-full">
      <AppSelect
        name="breed"
        className="flex-grow"
        selectClass="bg-light text-primary"
        options={[
          { label: 'All breeds', value: 'none' },
          ...breeds.map(breed => ({ label: breed.name, value: breed.id })),
        ]}
        onChange={(value: string) => onChange('breed', value)}
      />
      <AppSelect
        name="limit"
        selectClass="bg-light text-primary"
        options={[
          { label: 'Limit: 5', value: '5' },
          { label: 'Limit: 10', value: '10' },
          { label: 'Limit: 15', value: '15' },
          { label: 'Limit: 20', value: '20' },
        ]}
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
