import PropTypes from "prop-types"
import React from "react"

const GithubButton = ({ children, className, img, onClick }) => (
  <button className={`${className} cursor-pointer `} onClick={onClick}>
    <span className="flex flex-row">
      {children} <img src={img} alt="framework" className="w-6" />
    </span>
  </button>
)

GithubButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  img: PropTypes.string,
}

GithubButton.defaultProps = {
  className: `font-display rounded-px px-16`,
}
export default GithubButton
