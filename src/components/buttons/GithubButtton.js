import PropTypes from "prop-types"
import React from "react"
import Github from "../../assets/github_black.svg"
const GithubButton = ({ children, className, href }) => (
  <a
    className={`${className} cursor-pointer `}
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children} <img src={Github} alt="framework" className="w-6 inline-block" />
  </a>
)

GithubButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
}

GithubButton.defaultProps = {
  className: `font-display rounded-px px-6 py-2 border border-black border-3`,
}
export default GithubButton
