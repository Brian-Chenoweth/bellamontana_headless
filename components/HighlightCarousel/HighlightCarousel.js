import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from './HighlightCarousel.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const slides = [
  {
    id: 'slide-1',
    image: '/static/slider/slider-campus.jpg',
    alt: 'Campus Image',
    title: 'Explore Our Campus',
    description: 'Discover vibrant student life and world-class facilities.'
  },
  {
    id: 'slide-2',
    image: '/static/slider/slider-bm-home.jpg',
    alt: 'BM Home Image',
    title: 'Welcome Home',
    description: 'Experience a place where you belong.'
  },
  {
    id: 'slide-3',
    image: '/static/slider/slider-bm-sign.jpg',
    alt: 'BM Sign Image',
    title: 'Start Your Journey',
    description: 'Join a community of learners and leaders.'
  }
];

export default function HighlightCarousel({ className }) {
  const [current, setCurrent] = useState(0);
  const carouselClasses = cx('carousel', className);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <section className={carouselClasses}>
      <div className="container">
        <div className={cx('slide')}>
          <Image
            src={slides[current].image}
            alt={slides[current].alt}
            fill
            priority
            className={cx('image')}
          />
          <div className={cx('content')}>
            <h2>{slides[current].title}</h2>
            <p>{slides[current].description}</p>
          </div>
        </div>
        <div className={cx('controls')}>
          <button onClick={prevSlide} aria-label="Previous Slide">‹</button>
          <button onClick={nextSlide} aria-label="Next Slide">›</button>
        </div>
      </div>
    </section>
  );
}
