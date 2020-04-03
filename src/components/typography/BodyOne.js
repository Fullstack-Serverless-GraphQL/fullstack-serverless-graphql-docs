import React from "react"
import PropTypes from "prop-types"

const BodyOne = ({ children, className }) => (
  <p className={`${className} font-display text-sm text-black`}>{children}</p>
)

BodyOne.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

BodyOne.defaultProps = {
  className: ``,
}
export default BodyOne
