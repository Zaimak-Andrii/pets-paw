import type { VotingIconType } from '.';

export type LogMessageType = {
  id: number;
  imageId: string;
  action: VotingIconType | 'remove-favorite';
  time: string;
};
