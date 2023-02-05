import PropTypes from 'prop-types';

export const Button = ({ btnType, btnText, btnStyles, btnOnClick = () => {} }) => {
  return (
    <button
      type={btnType}
      className={btnStyles}
      onClick={btnOnClick}
    >
      { btnText }
    </button>
  )
}

Button.propTypes = {
  btnType: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  btnStyles: PropTypes.string.isRequired,
  btnOnClick: PropTypes.func
}