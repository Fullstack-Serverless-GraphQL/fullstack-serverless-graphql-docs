import PropTypes from "prop-types"
import React from "react"

const FrameworkButton = ({ children, className, img, onClick }) => (
  <button className={`${className} cursor-pointer `} onClick={onClick}>
    <div className="grid grid-cols-2 text-center">
      <span>{children} </span>
      <img src={img} alt="framework" className="w-6 ml-5" />
    </div>
  </button>
)

FrameworkButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  img: PropTypes.string,
}

FrameworkButton.defaultProps = {
  className: `font-display rounded-px text-right py-1`,
}
export default FrameworkButton
