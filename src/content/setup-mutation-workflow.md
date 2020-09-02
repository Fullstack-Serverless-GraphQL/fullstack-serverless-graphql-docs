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
      Surname
      country
      passportNumber
      physioScore
    }
    chargeReciept
  }
}

```

Next off we need to add Ant Design because we will use it's tabs component to create the checkout screen.

```
$ yarn add ant-design-vue
```

Then next head over to the `main.js` file to register it globally:

```
import { Tabs} from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(Tabs);

```

Lastly, lets add a route for the Booking page in the `router.js` file:

```
import Index from "./pages/booking";

const routes = [
{
    path: "/booking/:id",
    component: Index
  }
]
```

That should be enough for now, Next up we will set up the component.
