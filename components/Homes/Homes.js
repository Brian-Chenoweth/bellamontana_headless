import { gql } from '@apollo/client';
import React from 'react';
import Link from 'next/link';
import { Heading, FeaturedImage } from 'components';
import Button from 'components/Button';
import className from 'classnames/bind';
import useFocusFirstNewResult from 'hooks/useFocusFirstNewResult';
import appConfig from 'app.config';

import styles from './Homes.module.scss';
const cx = className.bind(styles);

// Currency formatter
const formatCurrency = (value) => {
  if (!value) return '';
  const number = parseFloat(value);
  if (isNaN(number)) return value;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(number);
};

const parseDateWithoutTimezoneShift = (value) => {
  if (!value) return null;

  if (typeof value === 'string') {
    const trimmedValue = value.trim();
    const isoDateMatch = trimmedValue.match(/^(\d{4})-(\d{2})-(\d{2})/);

    // Date-like strings should be interpreted as local calendar dates.
    // This prevents UTC offsets (e.g. +00:00) from shifting the day.
    if (isoDateMatch) {
      const [, year, month, day] = isoDateMatch;
      return new Date(Number(year), Number(month) - 1, Number(day));
    }
  }

  const parsedDate = new Date(value);
  return isNaN(parsedDate.getTime()) ? null : parsedDate;
};

const formatDate = (value) => {
  const date = parseDateWithoutTimezoneShift(value);
  if (!date) return value || '';
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const normalizeStatus = (rawStatus) => {
  return Array.isArray(rawStatus)
    ? rawStatus[0]?.trim()
    : (rawStatus ?? '').trim();
};

const getStatusPriority = (status) => {
  switch (status) {
    case 'forSale':
      return 0;
    case 'forRent':
      return 1;
    case 'salePending':
      return 2;
    default:
      return 99;
  }
};

const titleCollator = new Intl.Collator('en', {
  numeric: true,
  sensitivity: 'base',
});

const extractHomeNumber = (title) => {
  const cleanTitle = typeof title === 'string'
    ? title.replace(/<[^>]*>/g, '').trim()
    : '';
  const match = cleanTitle.match(/^(\d+)/);

  return match ? Number(match[1]) : Number.POSITIVE_INFINITY;
};

/**
 * Renders a list of Bella Montaña Home items
 * @param {Props} props The props object.
 * @param {Bellamontanahome[]} props.homes The array of home items.
 * @param {string} props.id The unique id for this component.
 * @returns {React.ReactElement} The Homes component
 */
function Homes({ homes, id }) {
  const filteredHomes = homes
    .filter((home) => {
      const status = normalizeStatus(home.bellaMontanaFields?.status);

      return (
        status === 'forSale' ||
        status === 'forRent' ||
        status === 'salePending'
      );
    })
    .sort((a, b) => {
      const aStatus = normalizeStatus(a.bellaMontanaFields?.status);
      const bStatus = normalizeStatus(b.bellaMontanaFields?.status);
      const statusDiff = getStatusPriority(aStatus) - getStatusPriority(bStatus);

      if (statusDiff !== 0) {
        return statusDiff;
      }

      const aNumber = extractHomeNumber(a.title);
      const bNumber = extractHomeNumber(b.title);

      if (aNumber !== bNumber) {
        return aNumber - bNumber;
      }

      return titleCollator.compare(a.title ?? '', b.title ?? '');
    });

  const { firstNewResultRef, firstNewResultIndex } =
    useFocusFirstNewResult(filteredHomes);

  return (
    <section {...(id && { id })}>
      {filteredHomes.map((home, i) => {
        const isFirstNewResult = i === firstNewResultIndex;
        const { status, price, dateAvailable } = home.bellaMontanaFields ?? {};
        const normalizedStatus = normalizeStatus(status);

        return (
          <>
          <div className="row" key={home.id ?? ''} id={`home-${home.id}`}>
            <div className={cx('list-item')}>

              <a href={`/available-homes${home?.uri?.replace('/bella-montana-home', '') ?? ''}`} className={cx('imageWrap')}>
                <FeaturedImage
                  className={cx('image')}
                  image={home?.featuredImage?.node}
                  title={home?.title}
                  priority={i < appConfig.projectsAboveTheFold}
                />
              </a>

              <div className={cx('content')}>
                <Heading level="h3">
                  <Link
                    legacyBehavior
                    href={`/available-homes${home?.uri?.replace('/bella-montana-home', '') ?? ''}`}
                  >
                    <a ref={isFirstNewResult ? firstNewResultRef : null}>
                      {home.title}
                    </a>
                  </Link>
                </Heading>

                {normalizedStatus === 'forRent' && (
                  <p><strong>For Rent:</strong> {formatCurrency(price)} / month</p>
                )}
                {normalizedStatus === 'forSale' && (
                  <p><strong>For Sale:</strong> {formatCurrency(price)}</p>
                )}
                {normalizedStatus === 'salePending' && (
                  <p><strong>Sale Pending</strong></p>
                )}
                {!['forRent', 'forSale', 'salePending'].includes(normalizedStatus) && normalizedStatus && (
                  <p><strong>Status:</strong> {normalizedStatus}</p>
                )}

                {normalizedStatus !== 'salePending' && dateAvailable && (
                  <p><strong>Date Available:</strong> {formatDate(dateAvailable)}</p>
                )}

                <Button href={`/available-homes${home?.uri?.replace('/bella-montana-home', '') ?? ''}`} className={cx('learnMore')}>Learn More</Button>
                
              </div>
            </div>
          </div>

            {filteredHomes.length >= 1 && (
                <hr />
            )}

          </>
        );
      })}

      

      {filteredHomes.length < 1 && (
        <div>
          <h2><span>No Homes</span> Currently Available</h2>
          <p>
            There are currently no homes available at this time. Please see our{' '}
            <a href="#footer-contact">Interested Buyers</a> section for more information.
          </p>
        </div>
      )}
    </section>
  );
}

Homes.fragments = {
  entry: gql`
    fragment HomesFragment on Bellamontanahome {
      id
      uri
      title
      bellaMontanaFields {
        status
        price
        dateAvailable
      }
      ...FeaturedImageFragment
    }
  `,
};

export default Homes;
