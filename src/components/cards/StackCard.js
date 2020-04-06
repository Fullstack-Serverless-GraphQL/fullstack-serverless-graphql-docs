import PropTypes from "prop-types"
import React from "react"

const StackCard = ({ children, className }) => (
  <button
    className={`${className} cursor-pointer bg-red-lightest text-red-darkest focus:outline-none font-display rounded-px px-16 py-2 hover:bg-transparent hover:border hover:border-red-darkest`}
  >
    {children}
  </button>
)

StackCard.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

StackCard.defaultProps = {
  className: ``,
}
export default StackCard
