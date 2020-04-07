import PropTypes from "prop-types"
import React from "react"

const RedOutlineButton = ({ children, className }) => (
  <button
    className={`${className} cursor-pointer bg-white-full border border-red-light text-red-darkest focus:outline-none font-display rounded-px px-16 py-2 hover:bg-transparent hover:border hover:border-red-darkest`}
  >
    {children}
  </button>
)

RedOutlineButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

RedOutlineButton.defaultProps = {
  className: ``,
}
export default RedOutlineButton
