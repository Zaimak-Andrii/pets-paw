'use client';

import { useState } from 'react';
import { UploadIcon } from '@/components/icons';
import AppButton from '../AppButton';
import type { AppButtonProps } from '../AppButton';
import UploadWindow from '@/components/UploadWindow';

export default function UploadButton(props: AppButtonProps) {
  const [isShowUpload, setIsShowUpload] = useState(false);

  const showUpload = () => {
    setIsShowUpload(true);
  };

  const closeUpload = () => {
    setIsShowUpload(false);
  };

  return (
    <>
      <AppButton variant="secondary" {...props} onClick={showUpload}>
        <UploadIcon className="w-[16px] h-[16px]" />
        Upload
      </AppButton>
      {isShowUpload && <UploadWindow onClose={closeUpload} />}
    </>
  );
}
