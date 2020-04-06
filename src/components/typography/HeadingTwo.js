import React from "react"
import PropTypes from "prop-types"

const HeadingTwo = ({ children, className }) => (
  <h1 className={`${className} font-display text-2xl text-black`}>
    {children}
  </h1>
)

HeadingTwo.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

HeadingTwo.defaultProps = {
  className: ``,
}
export default HeadingTwo
