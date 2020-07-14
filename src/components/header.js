import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Github from "../assets/github.svg"
const Header = ({ siteTitle }) => (
  <header className="border-top bg-transparent flex items-center justify-between flex-wrap p-6">
    <div className="flex items-center flex-no-shrink text">
      <h1 className="text-red font-bold font-display lg:text-3xl s:text-xl">
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <span>
        <img src={Github} alt="github icon" />
      </span>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
