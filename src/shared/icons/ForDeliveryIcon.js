import PropTypes from 'prop-types';

export const ForDeliveryIcon = ({ isCompleted }) => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M43 36H29V14H39.6C40.5 14 41.2 14.6 41.5 15.4L45 26V34C45 35.1 44.1 36 43 36Z" fill={ isCompleted ? "#61C454" : "#A5A5A5"} />
      <path d="M29 36H5C3.9 36 3 35.1 3 34V9C3 7.9 3.9 7 5 7H27C28.1 7 29 7.9 29 9V36Z" fill={ isCompleted ? "#388E3C" : "#BEBEBE"} />
      <path d="M37 41C39.7614 41 42 38.7614 42 36C42 33.2386 39.7614 31 37 31C34.2386 31 32 33.2386 32 36C32 38.7614 34.2386 41 37 41Z" fill="#BEBEBE" />
      <path d="M13 41C15.7614 41 18 38.7614 18 36C18 33.2386 15.7614 31 13 31C10.2386 31 8 33.2386 8 36C8 38.7614 10.2386 41 13 41Z" fill="#BEBEBE" />
      <path d="M37 38C38.1046 38 39 37.1046 39 36C39 34.8954 38.1046 34 37 34C35.8954 34 35 34.8954 35 36C35 37.1046 35.8954 38 37 38Z" fill={ isCompleted ? "#000000" : "#A5A5A5"} />
      <path d="M13 38C14.1046 38 15 37.1046 15 36C15 34.8954 14.1046 34 13 34C11.8954 34 11 34.8954 11 36C11 37.1046 11.8954 38 13 38Z" fill={ isCompleted ? "#000000" : "#A5A5A5"} />
      <path d="M41 25H34C33.4 25 33 24.6 33 24V17C33 16.4 33.4 16 34 16H39.3C39.7 16 40.1 16.3 40.2 16.7L41.9 21.9C41.9 22 42 22.1 42 22.2V24C42 24.6 41.6 25 41 25Z" fill={ isCompleted ? "#000000" : "#BEBEBE"} />
      <path d="M21.8 13.8L13.9 21.7L10.2 17.9L8 20.1L13.9 26L24 15.9L21.8 13.8Z" fill={ isCompleted ? "#FFFFFF" : "#E2E2E2"} />
    </svg>
  )
}

ForDeliveryIcon.propTypes = {
  isCompleted: PropTypes.bool,
};