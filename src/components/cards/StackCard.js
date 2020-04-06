import PropTypes from "prop-types"
import React from "react"
import HeadingThree from "../typography/HeadingThree"
import BodyOne from "../typography/BodyOne"

const StackCard = ({ Title, className, url }) => (
  <div className={`${className} cursor-pointer `}>
    <img src={url} alt="card logo" />
    <HeadingThree>{Title}</HeadingThree>
    <div className="flex flex-row">
      <img src="../../images.launch.svg" />
      <BodyOne>Docs</BodyOne>
    </div>
  </div>
)

StackCard.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

StackCard.defaultProps = {
  className: ``,
}
export default StackCard
