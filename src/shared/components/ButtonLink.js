import Link from 'next/link';
import PropTypes from 'prop-types';

export const ButtonLink = ({ linkHref, linkText, linkStyles }) => {
  return (
    <Link href={linkHref}>
      <a className={linkStyles}>
        { linkText }
      </a>
    </Link>
  )
}

ButtonLink.propTypes = {
  linkHref: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkStyles: PropTypes.string
};