import { useState } from 'react';

const useSwitcher = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  return {
    activeIndex,
    updateActiveIndex,
  };
};

export default useSwitcher;
