import React from "react"
import constants from "../../constants"
import HeadingThree from "../typography/HeadingThree"
import BodyOne from "../typography/BodyOne"
const Partners = () => {
  return (
    <div className="mt-10 p-5">
      <HeadingThree className="p-3 mt-5 mb-10 text-center">
        To make a bleeding edge appilcation you need amazing providers to make
        it imaginable and practical
      </HeadingThree>
      <div className="grid lg:grid-cols-3 gap-1 sm:grid-cols-1 ml-10">
        {constants.partners.map((p, i) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={p.url}
            className="flex flex-col"
            key={i}
          >
            <img src={p.logo} alt="partners" className="w-24" />
            <BodyOne className="text-blue-dark mt-4">{p.use}</BodyOne>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Partners
