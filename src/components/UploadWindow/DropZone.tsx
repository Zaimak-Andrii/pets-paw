'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';
import { twMerge } from 'tailwind-merge';

type Props = {
  file: File | undefined;
  error?: string | null;
  onChange: (file: File | undefined) => void;
};

export default function DropZone({ file, error, onChange }: Props) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onChange(acceptedFiles.at(0));
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg', '.jpeg'],
    },
    onDrop,
  });

  return (
    <div
      {...getRootProps({
        className: twMerge(
          'cursor-pointer relative flex justify-center items-center w-full max-tablet:h-[168px] h-[320px] mb-[20px] p-[20px] bg-white bg-upload bg-no-repeat bg-center border-2 border-dashed border-rose rounded-[20px]',
          `${error ? 'bg-rose border-light-red' : ''}`
        ),
      })}
    >
      {!file && (
        <>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="select-none">Drop the files here ...</p>
          ) : (
            <p className="select-none px-[48px]">
              <span className="text-dark font-medium">Drag here</span> your file or{' '}
              <span className="text-dark font-medium">Click here</span> to upload
            </p>
          )}
        </>
      )}

      {file && (
        <div className="w-[556px] max-tablet:h-[148px] h-[280px] overflow-hidden rounded-[10px]">
          <Image
            className="w-full h-full object-cover"
            src={URL.createObjectURL(file)}
            width={556}
            height={280}
            alt="Upload file"
          />
        </div>
      )}
    </div>
  );
}
