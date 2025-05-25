// utils/imageLoader.ts
interface ImageLoaderProps {
  src: string
  width?: number
  quality?: number
}

const imageLoader = ({ src }: ImageLoaderProps): string => {
  return src
}

export default imageLoader
