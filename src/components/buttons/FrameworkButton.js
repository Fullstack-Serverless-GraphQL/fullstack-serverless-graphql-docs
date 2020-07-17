import PropTypes from "prop-types"
import React from "react"

const FrameworkButton = ({ children, className, img, onClick }) => (
  <button className={`${className} cursor-pointer `} onClick={onClick}>
    <span className="flex flex-row">
      {children} <img src={img} alt="framework" className="w-6" />
    </span>
  </button>
)

FrameworkButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  img: PropTypes.string,
}

FrameworkButton.defaultProps = {
  className: ``,
}
export default FrameworkButton
