import { useState } from 'react';

enum EAnimation {
  open = 'open',
  close = 'close',
}

export const useNavmenu = (isOpen = false) => {
  const [animation, setAnimation] = useState(isOpen ? EAnimation.open : '');
  const [isOpenMenu, setIsOpenMenu] = useState(isOpen);

  const delayAnim = async (ms: number, animName: EAnimation) => {
    setAnimation(animName);

    await new Promise((resolve) => setTimeout(resolve, ms));

    setIsOpenMenu(animName === EAnimation.open);
  };

  const openMenu = () => delayAnim(300, EAnimation.open);
  const closeMenu = () => delayAnim(300, EAnimation.close);

  return {
    isOpenMenu,
    animation,
    openMenu,
    closeMenu,
  };
};
