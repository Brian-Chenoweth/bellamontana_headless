import classNames from 'classnames/bind';
import Button from 'components/Button';

import styles from './Testimonials.module.scss';

const cx = classNames.bind(styles);

export default function Slide1() {
  return (
    <>

        <div className={cx('slideContent')}>
            <h2>
                Conveniently
                <span>Affordable</span>
            </h2>
            
            <p>The Bella Montaña community is a residential neighborhood just minutes from campus designed by Cal Poly Partners to give faculty and staff the chance to own a home in San Luis Obispo, and be moments from everything that makes the Central Coast a great place to live.</p>

            <Button href="/about/">About our Homes</Button>
            
        </div>
        
        <div className={cx('slideImg slide1Img')}>

        </div>


    </>
  );
}
