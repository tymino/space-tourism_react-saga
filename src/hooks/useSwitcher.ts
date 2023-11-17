import { useState } from 'react'

export const useSwitcher = (defaultIndex = 0) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  const updateActiveIndex = (index: number) => {
    setActiveIndex(index)
  }

  return {
    activeIndex,
    updateActiveIndex,
  }
}
