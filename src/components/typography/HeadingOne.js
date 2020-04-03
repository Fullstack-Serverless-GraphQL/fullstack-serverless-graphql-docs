import React from "react"
import PropTypes from "prop-types"

const HeadingOne = (text, className) => (
  <h1 className={`${className}`}>{text}</h1>
)

HeadingOne.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
}

HeadingOne.defaultProps = {
  className: ``,
}
export default HeadingOne
