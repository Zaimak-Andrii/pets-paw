import type { LogMessageType } from '@/types';
import LogItem from './LogItem';

type Props = {
  logs: LogMessageType[];
};

export default function LogsList({ logs }: Props) {
  return (
    <ul className="flex flex-col gap-[10px] w-[calc(100%+40px)]  mx-[-20px] px-[20px] basis-0 flex-grow">
      {logs.map(log => (
        <LogItem key={log.id} {...log} />
      ))}
    </ul>
  );
}
