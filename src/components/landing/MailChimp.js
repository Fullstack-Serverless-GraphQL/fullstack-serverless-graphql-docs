import React, { useState } from "react"
import BodyOne from "../typography/BodyOne"
import RedBlockButton from "../buttons/RedBlockButton"
import HeadingThree from "../typography/HeadingThree"
import addToMailchimp from "gatsby-plugin-mailchimp"

const MailChimp = () => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const addEmail = async () => {
    try {
      setIsLoading(true)
      const result = await addToMailchimp(email)
      console.log("rrr", result)
      setIsLoading(false)
      setSubscribed(true)
    } catch (e) {
      setIsLoading(false)

      alert(e.message)
    }
  }
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
          <RedBlockButton onClick={() => addEmail()}>
            Yes, I'm keen
          </RedBlockButton>
        </div>
      </form>
    </div>
  )
}

export default MailChimp
