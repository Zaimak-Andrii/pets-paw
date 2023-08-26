import { ErrorIcon } from '../icons';
import Message, { MessageProps } from './Message';

export default function ErrorMessage({ children, ...props }: MessageProps) {
  return (
    <Message
      className="gap-[10px]"
      startIcon={<ErrorIcon className="w-[20px] h-[20px] text-light-red" />}
      {...props}
    >
      {children}
    </Message>
  );
}
