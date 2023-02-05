import Image from 'next/image';
import PropTypes from 'prop-types';

import { ButtonLink } from './';

export const Header = ({ showHeaderButton }) => {
  return (
    <header className="header h-28">
      <div className="container flex items-center justify-between h-full">
        <Image
          src="/logo.jpg"
          alt="CDL Tracking"
          width={118}
          height={50}
        />

        { showHeaderButton && (
          <ButtonLink
            linkHref={`${process.env.linksPath}/`}
            linkText="Tracking"
            linkStyles="inter-m text-sm text-white bg-blue-p rounded-md h-10 w-[130px] text-center leading-[40px] transition-opacity duration-300 ease-in-out hover:opacity-70"
          />
        )}
      </div>
    </header>
  )
}

Header.propTypes = {
  showHeaderButton: PropTypes.bool
};