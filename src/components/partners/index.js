import React from "react"
import constants from "../../constants"
import HeadingThree from "../typography/HeadingThree"
const Partners = () => {
  return (
    <>
      <HeadingThree>
        To make a bleeding edge appilcation you need amazing providers to make
        it imaginable and practical
      </HeadingThree>
      <div className="gri grid-cols-3 gap-2">
        {constants.partners.map((p, i) => (
          <div className="flex flex-col" key={i}>
            <img src={p.logo} alt="partners" />
            <p>{p.use}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Partners
