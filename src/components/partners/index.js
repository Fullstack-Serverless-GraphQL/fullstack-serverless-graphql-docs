import React from "react"
import constants from "../../constants"
import HeadingThree from "../typography/HeadingThree"
import BodyOne from "../typography/BodyOne"
const Partners = () => {
  return (
    <div className="mt-10">
      <HeadingThree className="p-3 mt-5 mb-10 text-center">
        To make a bleeding edge appilcation you need amazing providers to make
        it imaginable and practical
      </HeadingThree>
      <div className="grid grid-cols-2 gap-2">
        {constants.partners.map((p, i) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={p.url}
            className="flex flex-col text-center"
            key={i}
          >
            <img src={p.logo} alt="partners" />
            <BodyOne className="text-blue-dark mt-4">{p.use}</BodyOne>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Partners
