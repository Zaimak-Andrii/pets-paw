'use client';

import { MouseEvent, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Container from '../Container/Container';
import AppButton from '../buttons/AppButton/AppButton';
import { CloseIcon } from '../icons';
import { Navigation } from '../Navigation';

type Props = {
  onClose: () => void;
};

export default function MobileMenu({ onClose }: Props) {
  const clickBackdropHandler = (evt: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (evt.currentTarget !== evt.target) return;

    onClose();
  };

  useEffect(() => {
    const keyDownHandler = (evt: KeyboardEvent) => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };

    document.body.classList.add('modal-open');
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [onClose]);

  return (
    document?.body &&
    createPortal(
      <div
        className="desktop:visibility-hidden fixed top-0 left-0 w-full h-full bg-dark/60"
        onClick={clickBackdropHandler}
      >
        <Container className="desktop:p-[30px] pointer-events-none">
          <div className="relative w-full h-full px-[20px] py-[100px] ml-auto text-[20px] bg-light desktop:rounded-[20px] pointer-events-auto">
            <AppButton
              className="absolute top-[20px] right-[20px] w-[40px] h-[40px]"
              onClick={onClose}
            >
              <CloseIcon />
            </AppButton>

            <div className="flex justify-center">
              <Navigation />
            </div>
          </div>
        </Container>
      </div>,
      document.body
    )
  );
}
