import PropTypes from "prop-types"
import React from "react"

const RedBlockButton = ({ children, className, onClick, isLoading }) => (
  <button
    onClick={onClick}
    className={`${className} cursor-pointer bg-red-lightest text-red-darkest focus:outline-none font-display rounded-px px-16 py-2 hover:bg-transparent hover:border hover:border-red-darkest`}
  >
    {isLoading ? "...loading" : children}
  </button>
)

RedBlockButton.propTypes = {
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.string,
  className: PropTypes.string,
}

RedBlockButton.defaultProps = {
  className: ``,
}
export default RedBlockButton
