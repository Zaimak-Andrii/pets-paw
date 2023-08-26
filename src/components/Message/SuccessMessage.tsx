import { SucceessIcon } from '../icons';
import Message, { MessageProps } from './Message';

export default function SuccessMessage({ children, ...props }: MessageProps) {
  return (
    <Message
      className="gap-[10px]"
      startIcon={<SucceessIcon className="w-[20px] h-[20px] text-light-green" />}
      {...props}
    >
      {children}
    </Message>
  );
}
