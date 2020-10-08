---
path: /setup-mutation-workflow
title: Setup Mutation Workflow
tag: frontend
date: 2020-05-25T18:01:10.409Z
part: frontend
chapter: Make A Booking
postnumber: 33
framework: vue
---

In this chapter we will eventually create a mutation that allows the user to make a booking for a listing.

First off lets add a schema document called `makeABooking.gql` in the `graphql` folder:

```javascript
mutation MAKE_A_BOOKING(
  $size: Int
  $customerEmail: String
  $bookingDate: String
  $listingId: String
  $customers: [InputCustomer]
) {
  makeABooking(
    size: $size
    customerEmail: $customerEmail
    bookingDate: $bookingDate
    listingId: $listingId
    customers: $customers
  ) {
    ID
    listingID
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

```

Lastly, lets add a route for the Booking page in the `router.js` file:

```javascript
import Index from "./pages/booking"

const routes = [
  {
    path: "/booking/:id",
    component: Index,
  },
]
```

That should be enough for now, Next up we will set up the component to handle various tabs that will facilitate being able to make a booking.
