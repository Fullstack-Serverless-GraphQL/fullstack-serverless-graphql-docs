import React from "react"
import PropTypes from "prop-types"

const HeadingOne = ({ children, className }) => (
  <h1 className={`${className} font-display text-3xl text-black`}>
    {children}
  </h1>
)

HeadingOne.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

HeadingOne.defaultProps = {
  className: ``,
}
export default HeadingOne
