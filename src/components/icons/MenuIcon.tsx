import type { HTMLAttributes } from 'react';
import BaseIcon from './BaseIcon';

export default function MenuIcon(props: HTMLAttributes<HTMLSpanElement>) {
  return (
    <BaseIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="18"
        viewBox="0 0 30 18"
        fill="none"
      >
        <path


          d="M30 2H0V0H30V2ZM30 10H0V8H30V10ZM30 18H0V16H30V18Z"

        />
      </svg>
    </BaseIcon>
  );
}
