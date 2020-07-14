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
    </div>
    <span>
      <a
        className="flex flex-row"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Fullstack-Serverless-GraphQL/fullstack-serverless-graphql-docs"
      >
        <img src={Github} alt="github icon" />
      </a>
    </span>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
