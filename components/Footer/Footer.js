import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import Image from 'next/image';
import {
  EmailShareButton,
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
} from 'react-share';
import appConfig from 'app.config.js';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

/**
 * The Blueprint's Footer component
 * @return {React.ReactElement} The Footer component.
 */
export default function Footer() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  return (
    <footer className={cx('footer')}>
      <div className={cx('top')}>
        <div className="container">
          <div className={cx('contact-wrap')}>
            <div className={cx('logo')}>
              <Link legacyBehavior href="/">
                <a title="Home">
                  <Image
                    src="/logo-white.png"
                    width={400}
                    height={80}
                    alt="Bella Montana logo"
                    layout="responsive"
                  />
                </a>
              </Link>
            </div>

            <div className={cx('contact')}>
              <h4>Contact</h4>
              {appConfig?.contactInfo && (
                <div className={cx('contact')}>
                  {appConfig.contactInfo?.phoneNum && (
                    <a
                      rel="noopener noreferrer"
                      className={cx('phone')}
                      href={appConfig.contactInfo.phoneNum}
                    >
                      {appConfig.contactInfo.phoneNum}
                    </a>
                  )}
                  {appConfig.contactInfo?.email && (
                    <a
                      rel="noopener noreferrer"
                      className={cx('email')}
                      href={'mailto:' + appConfig.contactInfo.email}
                    >
                      {appConfig.contactInfo.email}
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className={cx('social-share')}>
              <EmailShareButton url={currentUrl} className={cx('share-button')}>
                <EmailIcon size={32} />
              </EmailShareButton>
              <FacebookShareButton url={currentUrl} className={cx('share-button')}>
                <FacebookIcon size={32} />
              </FacebookShareButton>
              <TwitterShareButton url={currentUrl} className={cx('share-button')}>
                <TwitterIcon size={32} />
              </TwitterShareButton>
              <PinterestShareButton url={currentUrl} className={cx('share-button')}>
                <PinterestIcon size={32} />
              </PinterestShareButton>
            </div>
          </div>
        </div>
      </div>

      <div className={cx('bottom')}>
        <div className="container">
          <div className={cx('copyright')}>
            &copy; {new Date().getFullYear()} || Bella Montaña || Cal Poly Partners
          </div>
        </div>
      </div>
    </footer>
  );
}
