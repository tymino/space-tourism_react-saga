import { useSelector } from 'react-redux'
import { useBackgroundImage, useSwitcher } from '.'
import { selectActivePage } from '../redux/store'
import { ERoutes } from '../routes'
import { IPictureData } from '../components/Background'
import { TActivePage } from '../types/redux/pages'

interface IUsePageData<T> {
  image: IPictureData
  data: T
  activeIndex: number
  updateActiveIndex: (index: number) => void
}

export const usePageData = <T extends TActivePage>(
  pageName: keyof typeof ERoutes
): IUsePageData<T> => {
  const image = useBackgroundImage(pageName)
  const { activeIndex, updateActiveIndex } = useSwitcher()
  const data = useSelector(selectActivePage) as T

  return {
    image,
    data,
    activeIndex,
    updateActiveIndex,
  }
}
