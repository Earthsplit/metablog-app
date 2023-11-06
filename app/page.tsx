import Carousel from '@/components/Carousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import { data } from '@/data'

export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true }

  return <Carousel slides={data} options={OPTIONS} />
}
