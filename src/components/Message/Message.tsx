import { HTMLAttributes, ReactElement, ReactNode, cloneElement } from 'react';
import { twMerge } from 'tailwind-merge';

export type MessageProps = HTMLAttributes<HTMLParagraphElement> & {
  variant?: 'white' | 'gray';
  startIcon?: ReactElement;
  endIcon?: ReactElement;
};

export default function Message({
  variant = 'gray',
  className,
  startIcon,
  endIcon,
  children,
}: MessageProps) {
  return (
    <p
      className={twMerge(
        ` flex items-center gap-[20px] gap-y-[10px] w-full px-[20px] py-[18px] text-[16px] text-primary ${
          variant === 'gray' ? 'bg-light ' : 'bg-white'
        } rounded-[10px]`,
        className
      )}
    >
      {startIcon}
      <span className="flex-grow">{children}</span>
      {endIcon &&
        cloneElement(endIcon, {
          ...endIcon.props,
          className: `${endIcon.props.className} ml-auto`,
        })}
    </p>
  );
}
