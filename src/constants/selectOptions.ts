import type { SelectOptionType } from '@/types';

export const limitOptions: SelectOptionType[] = [
  { label: 'Limit: 5', value: '5' },
  { label: 'Limit: 10', value: '10' },
  { label: 'Limit: 15', value: '15' },
  { label: 'Limit: 20', value: '20' },
];

export const typeOptions: SelectOptionType[] = [
  { label: 'All', value: 'jpg,gif,png' },
  { label: 'Static', value: 'jpg,png' },
  { label: 'Animated', value: 'gif' },
];

export const orderOptions: SelectOptionType[] = [
  { label: 'Random', value: 'random' },
  { label: 'Asc', value: 'asc' },
  { label: 'Desc', value: 'desc' },
];
