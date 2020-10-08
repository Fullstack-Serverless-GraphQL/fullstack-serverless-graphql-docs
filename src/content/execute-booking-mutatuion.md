---
path: /execute-booking-mutation-react
title: Execute Booking Mutatuion
tag: frontend
date: 2020-07-30T18:53:28.512Z
part: frontend
postnumber: 50
framework: react
chapter: Make A Booking Mutation
---

Here we will start integrating the booking mutation.

Head over to the `mutations.js` file in the `graphql` directory and add the following:

```javascript
export const MAKE_A_BOOKING = gql`
  mutation MAKE_A_BOOKING(
    $customerEmail: String
    $bookingDate: String
    $listingId: String
    $customers: [CustomerInput]
  ) {
    makeABooking(
      customerEmail: $customerEmail
      bookingDate: $bookingDate
      listingId: $listingId
      customers: $customers
    ) {
      bookingId
      listingId
      bookingDate
      size
      bookingTotal
      customerEmail
      customers {
        name
        surname
        country
        passportNumber
        physioScore
      }
      chargeReciept
    }
  }
`
```

This is the schema document we will use to make the booking for the customer.

Next go into the `Checkout.js` file and add the following :

```javascript
import { useMutation, useQuery } from "@apollo/react-hooks"
import { MAKE_A_BOOKING } from "../../graphql/Mutations"
```

Next we need to call the `mutate` function to make the booking and store the booking data in state so that we can use it on the Confirmation Tab:

```javascript
const [mutate, { data: mutationData, loading }] = useMutation(MAKE_A_BOOKING)
const mutationData = await mutate({
  variables: {
    customerEmail: data.formData.email,
    bookingDate: data.formData.date,
    customers: data.formData.customer,
    listingId: props.id,
  },
})

props.setActiveTab("4")
props.setBookingData(mutationData.data.makeABooking)
```

🍷 So we initilise the mutation as a function from the hook and give the mutation result an alias `MutationData`

🍷 Next up we use the the data from our local state to add the `customerEmail`, `BookingDate` and `customers`. We use the `id` from the `URL` to pass in the `listingId`.

🍷 We call our `setBookingData` hooking and set the mutation result.

Make sure your `Checkout.js` file looks like this:

```javascript
import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js"
import { useMutation, useQuery } from "@apollo/react-hooks"

import HeadingOne from "../../components/typography/HeadingOne"
import BodyOne from "../../components/typography/BodyOne"
import RedBlockButton from "../../components/buttons/RedBlockButton"
import RedOutlineButton from "../../components/buttons/RedOutlineButton"
import { MAKE_A_BOOKING } from "../../graphql/Mutations"
import { GET_FORM_DATA } from "../../graphql/Queries"
const StripeElements = props => {
  const stripe = useStripe()
  const elements = useElements()
  const { data } = useQuery(GET_FORM_DATA)
  const [mutate, { loading, error }] = useMutation(MAKE_A_BOOKING)

  const pay = async () => {
    const result = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })

    try {
      const mutationData = await mutate({
        variables: {
          customerEmail: data.formData.email,
          bookingDate: data.formData.date,
          customers: data.formData.customer,
          listingId: props.id,
        },
      })
      props.setActiveTab("4")
      props.setBookingData(mutationData.data.makeABooking)
      console.log(result, mutationData.data.makeABooking)
    } catch (e) {
      return <p className="text-red">{e.message} </p>
    }
  }
  return (
    <>
      <CardElement />
      {error && <p className="text-red-dark">{error.message}</p>}
      {loading && (
        <>
          <p className="text-red">Busy booking your trip</p>
        </>
      )}
      <div class="flex flex-row mt-20">
        <RedBlockButton
          className="mr-5 s:mb-5  lg:mb-0"
          isLoading={loading}
          onClick={() => pay()}
        >
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
const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`)

const Checkout = props => {
  return (
    <Elements stripe={stripePromise}>
      <div className="flex flex-col">
        <HeadingOne>Your trip total</HeadingOne>
        <BodyOne>
          Test using this credit card: 4242 4242 4242 4242, and enter any 5
          digits for the zip code
        </BodyOne>

        <StripeElements
          setActiveTab={props.setActiveTab}
          id={props.id}
          setBookingData={props.setBookingData}
        />
      </div>
    </Elements>
  )
}

export default Checkout
```

Next up in the `index.js` file in the booking directory make sure you add the hook:

```javascript
const [bookingData, setBookingData] = useState({})
```

and then pass down the hook, the `id` and `bookingData` into the relevant components that need them:

```javascript
<Tabs.TabPane key="3" className="flex justify-center">
          <Checkout
            setActiveTab={setActiveTab}
            id={props.id}
            setBookingData={setBookingData}
          />
        </Tabs.TabPane>
        <Tabs.TabPane key="4" className="flex justify-center">
          <ConfirmationTab
            setActiveTab={setActiveTab}
            navigate={props.navigate}
            bookingData={bookingData}
          />
        </Tabs.TabPane>
```

Lastly lets head over to the `ConfirmationTab.js` file:

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
          you soon on {props.bookingData.bookingDate}
        </BodyOne>
        <div>
          <img src={ticket} alt="ticket" />
          <a
            class="text-yellow font-display"
            target="_blank"
            rel="noopener noreferrer"
            href={props.bookingData.chargeReciept}
          >
            Tickets
          </a>
        </div>
        <div class="flex flex-row ml-32 mt-20">
          <RedBlockButton
            text="Book more"
            onClick={() => props.navigate(`/`)}
            className="mr-5"
          />
        </div>
      </div>
    </>
  )
}

export default ConfirmationTab
```

🍷 All we have done here is refence the booking data in the right parts to show the user.

Now we should be able to make bookings for listings! ☎️
