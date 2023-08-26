'use client';

import { MouseEvent, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { ClipLoader } from 'react-spinners';
import Container from '../Container';
import AppButton from '../buttons/AppButton/AppButton';
import { CloseIcon } from '../icons';
import DropZone from './DropZone';
import { uploadFileService } from '@/services/api';
import { ErrorMessage, SuccessMessage } from '../Message';

type Props = {
  onClose: () => void;
};

export default function UploadWindow({ onClose }: Props) {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const clickBackdropHandler = (evt: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (evt.currentTarget !== evt.target) return;

    onClose();
  };

  const uploadHandler = async () => {
    if (!file) return;

    setIsLoading(true);
    setError(null);
    try {
      await uploadFileService(file);

      setMessage('Thanks for the Upload - Cat found!');
      setFile(undefined);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setError(null);
  }, [file]);

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
      <div className="fixed top-0 left-0 w-full h-full bg-dark/60" onClick={clickBackdropHandler}>
        <Container className="p-[30px] pointer-events-none">
          <div className="relative w-[680px] h-full px-[20px] py-[100px] ml-auto text-[20px] bg-light rounded-[20px] pointer-events-auto">
            <AppButton
              className="absolute top-[20px] right-[20px] w-[40px] h-[40px]"
              onClick={onClose}
            >
              <CloseIcon />
            </AppButton>
            <h2 className="w-fit mx-auto mb-[10px] text-[36px]/[normal] text-dark font-medium">
              Upload a .jpg or .png Cat Image
            </h2>
            <p className="w-fit mx-auto mb-[40px]">
              Any uploads must comply with the{' '}
              <Link href="https://thecatapi.com/privacy" className="text-light-red">
                upload guidelines
              </Link>{' '}
              or face deletion.
            </p>

            <DropZone file={file} onChange={setFile} error={error} />

            {file ? (
              <>
                <p className="w-fit mx-auto mb-[20px]">Image File Name: {file.name}</p>
                {!error && (
                  <AppButton
                    variant="secondary"
                    className="component-red mx-auto px-[30px] py-[12px] gap-[10px]"
                    onClick={uploadHandler}
                    disabled={isLoading}
                  >
                    {isLoading && <ClipLoader size={16} color="#ffffff" />} Upload photo
                  </AppButton>
                )}
              </>
            ) : (
              <p className="w-fit mx-auto mb-[20px]">No file selected</p>
            )}

            {message && !file && <SuccessMessage variant="white">{message}</SuccessMessage>}

            {error && <ErrorMessage variant="white">{error}</ErrorMessage>}
          </div>
        </Container>
      </div>,
      document.body
    )
  );
}
