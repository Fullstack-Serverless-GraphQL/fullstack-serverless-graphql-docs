import React from "react"
import PropTypes from "prop-types"

const HeadingTwo = ({ children, className }) => (
  <h2 className={`${className} font-display text-4xl text-black`}>
    {children}
  </h2>
)

HeadingTwo.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

HeadingTwo.defaultProps = {
  className: ``,
}
export default HeadingTwo
