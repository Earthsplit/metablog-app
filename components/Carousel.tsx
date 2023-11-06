'use client'

import { useCallback } from 'react'
import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaCarouselType,
} from 'embla-carousel-react'
import { DotButton, useDotButton } from './CarouselButtons'
import Autoplay from 'embla-carousel-autoplay'
import Section from './Section'
import { DataProps } from '@/data'

type PropType = {
  slides: DataProps[]
  options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const { autoplay } = emblaApi.plugins()
    if (!autoplay) return
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onButtonClick,
  )

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((slide) => (
            <div className='embla__slide' key={slide.id}>
              <Section data={slide} />
            </div>
          ))}
        </div>
      </div>

      <div className='embla__dots'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : '',
            )}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
