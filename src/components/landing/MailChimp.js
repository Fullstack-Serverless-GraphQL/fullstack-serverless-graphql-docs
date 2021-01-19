import React from "react"
import HeadingOne from "../typography/HeadingOne"
import BodyOne from "../typography/BodyOne"
import RedBlockButton from "../buttons/RedBlockButton"

const MailChimp = () => {
  return (
    <div>
      <form>
        <div>
          <input type="email" placeholder="mazibuko@telsa.com" />
          <RedBlockButton>Yes, I'm keen</RedBlockButton>
        </div>
      </form>
    </div>
  )
}

export default MailChimp
