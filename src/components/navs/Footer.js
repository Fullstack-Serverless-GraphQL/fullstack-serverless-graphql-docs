import React from "react"
import BodyOne from "../typography/BodyOne"
const Footer = () => (
  <footer className="border-bottom  mt-20 text-center">
    <BodyOne className="mb-5">
      Manufactured in 🇿🇦 by{" "}
      <a
        className="text-yellow mb-5"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/AmoDinho"
      >
        @PrinceAshburton{" "}
      </a>
    </BodyOne>
  </footer>
)

export default Footer
