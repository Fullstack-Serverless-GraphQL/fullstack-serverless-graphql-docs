import React from "react"
const Partners = () => {
  return (
    <>
      <div className="gri grid-cols-3 gap-2">
        {partners.map((p, i) => (
          <div className="flex flex-col" key={i}>
            <p.image />
            <p>{p.use}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Partners
