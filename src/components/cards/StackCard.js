import PropTypes from "prop-types"
import React from "react"
import HeadingThree from "../typography/HeadingThree"
import BodyOne from "../typography/BodyOne"
import NewTab from "../../images/launch.svg"
const StackCard = ({ Title, className, url, linkURL }) => (
  <div
    className={`${className} cursor-pointer shadow-lg rounded-lg flex flex-col p-10 p- ml-10 h-200 max-w-3xl bg-white`}
  >
    <img src={url} alt="card logo" className="h-16 mb-3" />
    <HeadingThree>{Title}</HeadingThree>
    <div className="flex flex-row ">
      <a
        className="text-blue flex flex-row"
        target="_blank"
        rel="noopener noreferrer"
        href={linkURL}
      >
        <img src={NewTab} alt="new_tab_icon" />
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
