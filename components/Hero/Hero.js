import classNames from 'classnames/bind';
import Image from 'next/image';

import styles from './Hero.module.scss';

const cx = classNames.bind(styles);

/**
 * The Blueprint's Hero component
 * @return {React.ReactElement} The Hero component.
 */
export default function Hero() {
  return (
    <div className={cx('hero-wrap')}>
        <Image
            src="/static/hero.jpg"
            width="100"
            height="100"
            objectFit="cover"
            layout="responsive"
        />
      <div className="container">
      </div>
    </div>
  );
}
