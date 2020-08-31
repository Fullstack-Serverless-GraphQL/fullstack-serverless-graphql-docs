---
path: /create-booking-forms-part-three
title: Create Booking Forms Pt.3
tag: frontend
date: 2020-07-29T18:36:08.870Z
part: frontend
postnumber: 49
framework: react
chapter: Make A Booking Mutation
---

In this finale of the three parts we will work on the checkout form and the confirmation tab.

In the `booking` directory, create a file called `Checkout.js` and add the following:

```javascript
import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js"
import HeadingOne from "../../components/typography/HeadingOne"
import BodyOne from "../../components/typography/BodyOne"
import RedBlockButton from "../../components/buttons/RedBlockButton"
import RedOutlineButton from "../../components/buttons/RedOutlineButton"

const StripeElements = props => {
  const stripe = useStripe()
  const elements = useElements()

  const pay = async () => {
    const result = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })
    props.setActiveTab("4")
    console.log(result)
  }
  return (
    <>
      <CardElement />
      <div class="flex flex-row mt-20">
        <RedBlockButton className="mr-5 s:mb-5  lg:mb-0" onClick={() => pay()}>
          Pay
        </RedBlockButton>
        <RedOutlineButton onClick={() => props.setActiveTab("2")}>
          {" "}
          Back
        </RedOutlineButton>
      </div>
    </>
  )
}
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)

const Checkout = props => {
  return (
    <Elements stripe={stripePromise}>
      <div className="flex flex-col">
        <HeadingOne>Your trip total</HeadingOne>
        <BodyOne>
          Test using this credit card: 4242 4242 4242 4242, and enter any 5
          digits for the zip code
        </BodyOne>
        <StripeElements setActiveTab={props.setActiveTab} />
      </div>
    </Elements>
  )
}

export default Checkout
```

🦚 Here the `StripeElements` is a child component with props passed to it, we make use of the two hooks to allow us to pay and setup the Stripe form

🦚 The pay function will trigger Stripe to Pay for us. When it is done we will then send the user to the next tab.

🦚 We use Stripe's `cardElement` component and have two buttons with the option to pay or go back to the next tab

🦚 `Checkout` is the parent component that will render the form for the Stripe.

Next up create a file called `ConfirmationTab.js` :

```javascript
import React from "react"
import HeadingOne from "../../components/typography/HeadingOne"
import BodyOne from "../../components/typography/BodyOne"
import RedBlockButton from "../../components/buttons/RedBlockButton"
import vector from "../../assets/Vector.svg"
import ticket from "../../assets/confirmation_number.svg"
const ConfirmationTab = props => {
  return (
    <>
      <div class="flex flex-col p-20 ">
        <HeadingOne>Thanks for booking with us</HeadingOne>
        <img src={vector} alt="vector" class="mt-5" />
        <BodyOne className="mt-5">
          Your link to your ticket is in the mail. Keep it safe and we will see
          you soon on{" "}
        </BodyOne>
        <div className="text-center flex justify-center">
          <img src={ticket} alt="ticket" />
          <a class="text-yellow font-display" href="bookingData.chargeReciept">
            Tickets
          </a>
        </div>
        <div class="flex flex-row ml-32 mt-20">
          <RedBlockButton onClick={() => props.navigate(`/`)} className="mr-5">
            Book more
          </RedBlockButton>
        </div>
      </div>
    </>
  )
}

export default ConfirmationTab
```

🦚 In this last form wethank the user for booking the trip.
