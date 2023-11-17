import { useState } from 'react'
import { ERoutes } from '../routes'
import { BackgroundImageData } from '../localDB/BackgroundImageData'

export const useBackgroundImage = (routeName: keyof typeof ERoutes) => {
  const [image] = useState(BackgroundImageData[ERoutes[routeName]])

  return image
}
