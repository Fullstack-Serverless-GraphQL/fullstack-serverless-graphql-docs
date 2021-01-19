import React from "react"
import BodyOne from "../typography/BodyOne"
import RedBlockButton from "../buttons/RedBlockButton"
import HeadingThree from "../typography/HeadingThree"

const MailChimp = () => {
  return (
    <div>
      <form>
        <div className="grid grid-cols-1 w-1/3">
          <HeadingThree>
            Get notified when a PDF version of the guide drops and updates are
            published.
          </HeadingThree>
          <input
            type="email"
            placeholder="mazibuko@telsa.com"
            className="p-2 mb-3"
          />
          <RedBlockButton>Yes, I'm keen</RedBlockButton>
        </div>
      </form>
    </div>
  )
}

export default MailChimp
