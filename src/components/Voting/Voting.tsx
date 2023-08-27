'use client';

import { useState } from 'react';
import Image from 'next/image';
import useSWR from 'swr';
import Breadcrumb from '../Breadcrumb';
import type { LogMessageType } from '@/types';
import LogsList from '../LogsList/LogsList';
import { getRandomImageService } from '@/services/api';
import VotingButtons from './VotingButtons';
import { getCurrentTime } from '@/helpers';

export default function Voting() {
  const [random, setRandom] = useState(Date.now());
  const [isRequestLoading, setIsRequestLoading] = useState(false);
  const { data: image, isLoading, error } = useSWR(`voiting-${random}`, getRandomImageService);
  const [logs, setLogs] = useState<LogMessageType[]>([]);

  const clickVoteHandler = async (
    fn: (id: string) => Promise<void>,
    action: LogMessageType['action']
  ) => {
    if (!image || isLoading || isRequestLoading) return;

    setIsRequestLoading(true);

    try {
      await fn(image.id);

      setLogs(prev => [
        { id: Date.now(), imageId: image.id, action, time: getCurrentTime() },
        ...prev,
      ]);

      setRandom(Date.now());
    } catch (error) {
      console.log(error);
    } finally {
      setIsRequestLoading(false);
    }
  };

  return (
    <section className="section">
      <Breadcrumb />

      <div className="flex flex-col flex-grow gap-[52px] w-full">
        <div className="relative flex-shrink-0 w-full h-[166px] tablet:h-[360px] rounded-[20px] skeleton">
          {image && (
            <Image
              className="w-full h-full object-cover rounded-[20px]"
              src={image?.url}
              alt={image?.id}
              width={640}
              height={360}
            />
          )}
          <VotingButtons imageId={image?.id} onClick={clickVoteHandler} />
        </div>
        <LogsList logs={logs} />
      </div>
    </section>
  );
}
