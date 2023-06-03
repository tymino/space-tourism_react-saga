import { useState } from 'react';

export const useNavmenu = (isOpen = false) => {
  const [isOpenMenu, setIsOpenMenu] = useState(isOpen);

  const openMenu = () => setIsOpenMenu(true);
  const closeMenu = () => setIsOpenMenu(false);

  return {
    isOpenMenu,
    openMenu,
    closeMenu,
  };
};
