import PropTypes from "prop-types"
import React from "react"
import Github from "../../assets/github.svg"
const GithubButton = ({ children, className, onClick }) => (
  <button className={`${className} cursor-pointer `} onClick={onClick}>
    <span className="flex flex-row">
      {children} <img src={Github} alt="framework" className="w-6" />
    </span>
  </button>
)

GithubButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

GithubButton.defaultProps = {
  className: `font-display rounded-px px-8 border border-black border-3`,
}
export default GithubButton
