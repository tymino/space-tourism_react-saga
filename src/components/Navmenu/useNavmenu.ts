import { useState } from 'react';

export const useNavmenu = (isOpen = false) => {
  const [animation, setAnimation] = useState('');
  const [isOpenMenu, setIsOpenMenu] = useState(isOpen);

  console.log('useNavmenu');

  const delayAnim = async (ms: number, isOpen = false, animName = 'close') => {
    setAnimation(animName);

    await new Promise((resolve) => setTimeout(resolve, ms));

    setIsOpenMenu(isOpen);
  };

  const openMenu = () => delayAnim(300, true, 'open');
  const closeMenu = () => delayAnim(300);

  return {
    isOpenMenu,
    animation,
    openMenu,
    closeMenu,
  };
};
