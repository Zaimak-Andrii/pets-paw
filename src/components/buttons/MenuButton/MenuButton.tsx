import React, { useState } from 'react';
import AppButton, { AppButtonProps } from '../AppButton/AppButton';
import { MenuIcon } from '@/components/icons';
import MobileMenu from '@/components/MobileMenu/MobileMenu';

type Props = {};

export default function MenuButton(props: AppButtonProps) {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const showMenu = () => {
    setIsShowMenu(true);
  };

  const closeMenu = () => {
    setIsShowMenu(false);
  };
  return (
    <>
      <AppButton className="px-[15px] py-[21px]" {...props} onClick={showMenu}>
        <MenuIcon className="w-[30px] h-[18px]" />
      </AppButton>
      {isShowMenu && <MobileMenu onClose={closeMenu} />}
    </>
  );
}
