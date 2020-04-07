import React from "react"
import PropTypes from "prop-types"

const HeadingThree = ({ children, className }) => (
  <h1 className={`${className} font-display text-xl text-black`}>{children}</h1>
)

HeadingThree.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

HeadingThree.defaultProps = {
  className: ``,
}
export default HeadingThree
