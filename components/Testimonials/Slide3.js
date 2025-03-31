import classNames from 'classnames/bind';
import Button from 'components/Button';

import styles from './Testimonials.module.scss';

const cx = classNames.bind(styles);

export default function Slide3() {
  return (
    <>
        <div className={cx('slideContent')}>
          <h2>
              Campus
              <span>Community</span>
          </h2>
          <p>As a member of the Cal Poly campus community, your commitment to the success of the university and its students is valued and appreciated. Cal Poly Partners is proud to offer an affordable way to enhance your quality of life, through the availability and dependability of the Bella Montaña community. Bella Montaña is just one way Cal Poly Partners is committed to the success of the university’s faculty, staff, and students.</p>

          <Button href="/community/">Our Community</Button>

      </div>

      <div className={cx('slideImg slide3Img')}>

      </div>
    </>
  );
}
