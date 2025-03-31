import className from 'classnames/bind';
import { FeaturedImage, PostInfo } from 'components';

import styles from './EntryHeader.module.scss';
const cx = className.bind(styles);

/**
 * A Page or Post entry header component
 * @param {Props} props The props object.
 * @param {string} props.title The post/page title. (Unused)
 * @param {MediaItem} props.image The image node.
 * @param {string} props.date The post/page publish date.
 * @param {string} props.author The post/page author's name.
 * @param {string} props.className An optional className to be added to the EntryHeader.
 * @return {React.ReactElement} The EntryHeader component.
 */
export default function EntryHeader({ title, image, date, author, className }) {
  const hasText = date || author; // title removed from here

  return (
    <div className={cx(['entry-header', className])}>
      {hasText && (
        <div className={cx('text')}>
          <PostInfo className={cx('byline')} author={author} date={date} />
        </div>
      )}

      {image && (
        <div className={cx('image')}>
          <div className="container">
            <FeaturedImage
              className={cx('featured-image')}
              image={image}
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
