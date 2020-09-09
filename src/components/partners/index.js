import React from "react"
import constants from "../../constants"
const Partners = () => {
  return (
    <>
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
