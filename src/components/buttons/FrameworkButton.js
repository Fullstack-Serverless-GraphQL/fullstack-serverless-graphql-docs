import PropTypes from "prop-types"
import React from "react"

const FrameworkButton = ({ children, className, img }) => (
  <button className={`${className} cursor-pointer `}>
    <span className="flex flex-row">
      {children} <img src={img} alt="framework image" />
    </span>
  </button>
)

RedBlockButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

FrameworkButton.defaultProps = {
  className: ``,
}
export default FrameworkButton
