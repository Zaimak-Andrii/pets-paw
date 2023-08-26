'use client';

import { ReactNode } from 'react';
import { SWRConfig } from 'swr';

type Props = {
  children?: ReactNode;
};

export default function AppProvider({ children }: Props) {
  return <SWRConfig value={{ revalidateOnFocus: false }}>{children}</SWRConfig>;
}
