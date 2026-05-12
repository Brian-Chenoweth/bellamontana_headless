import classNames from 'classnames/bind';
import Image from 'next/image';
import Button from 'components/Button';

import styles from './Hero.module.scss';

const cx = classNames.bind(styles);

export default function Hero() {
  return (
    <div className={cx('hero-wrap')}>
      <div className={cx('overlay')} />

      <div className="container">
        <div className={cx('hero-content')}>
          <h1 className="sr-only">
            Bella Montana Homes, an exclusive residential community for
            university and faculty staff
          </h1>
          <Image
            src="/static/welcome-to-bm.png"
            width="100"
            height="100"
            objectFit="contain"
            layout="responsive"
            alt="Welcome to Bella Montaña"
          />
          <p>
            An exclusive residential community designed by{' '}
            <span>Cal Poly Partners</span> for university and faculty staff.
          </p>
          <Button href="/available-homes/">Available Homes</Button>
        </div>
      </div>
    </div>
  );
}
