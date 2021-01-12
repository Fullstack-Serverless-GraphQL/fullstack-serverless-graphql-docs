import PropTypes from "prop-types"
import React from "react"

const FrameworkButton = ({ children, className, img, onClick }) => (
  <button
    className={`${className} cursor-pointer flex md:flex-row s-max:justify-around`}
    onClick={onClick}
  >
    <p>{children} </p>
    <img src={img} alt="framework" className="w-6 ml-5 mr-4 inline-block" />
  </button>
)

FrameworkButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  img: PropTypes.string,
}

FrameworkButton.defaultProps = {
  className: `font-display rounded-px text-center `,
}
export default FrameworkButton
