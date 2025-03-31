import Button from 'components/Button';

import styles from './Testimonials.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Slide2() {
  return (
    <>
        <div className={cx('slideContent')}>

          <h2>
              Beautifully
              <span>Constructed</span>
          </h2>
          
          <p>The Bella Montaña community was thoughtfully designed and carefully crafted by local Cal Poly supporting professionals in partnership with Cal Poly Partners, and is situated near some of San Luis Obispo’s finest attractions. It offers nearly 70 homes with 10 flexible floor plans in 3 distinct categories, La Cumbre, La Mesa, and La Valle.</p>

          <Button href="/home-designs/">Home Designs</Button>

      </div>

      <div className={cx('slideImg slide2Img')}>

      </div>

    </>
  );
}
