import React from "react"
import assets from "../../assets"
const Partners = () => {
  const partners = [
    {
      href: "test",
      use: "Hosting of repos",
      image: assets.github,
    },
    {
      href: "test",
      use: "Cloud provider",
      image: assets.aws,
    },
  ]
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
