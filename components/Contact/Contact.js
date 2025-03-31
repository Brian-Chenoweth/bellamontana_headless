import classNames from 'classnames/bind';
import Link from 'next/link';
import Image from 'next/image';
import appConfig from 'app.config.js';

import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

/**
 * The Blueprint's Contact component
 * @return {React.ReactElement} The Contact component.
 */
export default function Contact() {
  return (
    <div className={cx('footer-contact')}>
      <div className="container">
        <div className={cx('contact-wrap')}>
        <iframe
            width="100%"
            height="975px"
            src="https://forms.office.com/r/GKt5ch1qYm?embed=true"
            frameBorder={0}
            marginWidth={0}
            marginHeight={0}
            style={{ border: "none", maxWidth: "100%", width: "100%", margin: "0", maxHeight: "100vh" }}
            allowFullScreen=""
            webkitallowfullscreen=""
            mozallowfullscreen=""
            msallowfullscreen=""
          >
          {" "}
        </iframe>
        </div>
      </div>
    </div>
  );
}
