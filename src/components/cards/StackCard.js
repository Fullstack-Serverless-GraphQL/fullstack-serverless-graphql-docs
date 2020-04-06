import PropTypes from "prop-types"
import React from "react"
import HeadingThree from "../typography/HeadingThree"
import BodyOne from "../typography/BodyOne"

const StackCard = ({ Title, className, url, linkURL }) => (
  <div className={`${className} cursor-pointer `}>
    <img src={url} alt="card logo" />
    <HeadingThree>{Title}</HeadingThree>
    <div className="flex flex-row">
      <a
        className="text-blue"
        target="_blank"
        rel="noopener noreferrer"
        href={linkURL}
      >
        <img src="../../images.launch.svg" />
        <BodyOne>Docs</BodyOne>
      </a>
    </div>
  </div>
)

StackCard.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string,
  linkURL: PropTypes.string,
  Title: PropTypes.string,
}

StackCard.defaultProps = {
  className: ``,
}
export default StackCard
