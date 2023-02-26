import Slider from 'react-slick'
import css from './index.module.scss'
import { getImageUrl } from '@/utils/image'

export const Gallery = ({ input }: { input: any }) => {
  return (
    <Slider
      {...{
        dots: false,
        arrows: false,
        fade: true,
        infinite: true,
        lazyLoad: 'anticipated',
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      }}
      className={css.gallery}
    >
      {input?.map((item: any) => (
        <div key={item._key}>
          <img alt="" src={getImageUrl(item)} />
        </div>
      ))}
    </Slider>
  )
}
