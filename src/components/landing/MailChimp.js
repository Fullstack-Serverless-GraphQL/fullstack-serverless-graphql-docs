import React from "react"
import HeadingOne from "../typography/HeadingOne"
import BodyOne from "../typography/BodyOne"
import RedBlockButton from "../buttons/RedBlockButton"

const MailChimp = () => {
  return (
    <div>
      <form>
        <div className="grid grid-rows-2 w-1/3">
          <input
            type="email"
            placeholder="mazibuko@telsa.com"
            className="p-1"
          />
          <RedBlockButton>Yes, I'm keen</RedBlockButton>
        </div>
      </form>
    </div>
  )
}

export default MailChimp
