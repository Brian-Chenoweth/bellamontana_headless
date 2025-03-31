import { gql } from '@apollo/client';
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from 'react-icons/fa';
import className from 'classnames/bind';
import { Carousel } from 'react-responsive-carousel';

import TestimonialItem from '../TestimonialItem';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Testimonials.module.scss';
const cx = className.bind(styles);

/**
 * Render the testimonials component
 *
 * @param {Props} props The props object.
 * @param {Testimonial[]} props.testimonials The array of testimonials.
 * @returns {React.ReactElement} The testimonials component.
 */
export default function Testimonials({ testimonials }) {
  return (
    <>
      <div className={cx('container')}>

        <Carousel
          showIndicators={false}
          showThumbs={false}
          renderArrowPrev={(clickHandler) => (
            <FaChevronCircleLeft
              className={cx('arrow')}
              onClick={clickHandler}
            />
          )}
          renderArrowNext={(clickHandler) => (
            <FaChevronCircleRight
              className={cx('arrow')}
              onClick={clickHandler}
            />
          )}
          infiniteLoop={true}
          showStatus={false}
        >
            <Slide1 />
            <Slide2 />
            <Slide3 />
        </Carousel>
      </div>
    </>
  );
}

Testimonials.fragments = {
  entry: gql`
    fragment TestimonialsFragment on Testimonial {
      testimonialFields {
        testimonialContent
        testimonialAuthor
      }
    }
  `,
};
