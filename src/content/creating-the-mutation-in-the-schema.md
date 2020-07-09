---
path: /create-mutation-in-schema
title: Creating the Mutation in the Schema
tag: "backend "
date: 2020-05-17T18:21:12.181Z
part: Building backend
chapter: Make a booking mutation
postnumber: 16
---

In this chapter we will be building our mutation which will allow users to be able to book for listings. First lets create the necessary Types for our mutations.

Open up your schema.js file and paste the following:

```

  type Booking {
      ID: String
      listingID: String
      bookingDate: String
      size: Int
      bookingTotal: String
      customerEmail: String
      customers: [Customer]
      chargeReciept: String

  }
  type Customer {
    name: String
    Surname: String
     country: String
    passportNumber: String
    physioScore: String
  }

  input InputCustomer {
    name: String
    Surname: String
     country: String
    passportNumber: String
    physioScore: String
  }


```

🌍 Our first type is a Booking Type, with the data we need to capture the booking of the specific listing. If you note there is a Customers field.

🌍 This Customers field is meant to return an array of customers, which we have defined as its own type.

🌍 lastly, we have an input called InputCustomer. An input in GraphQL is a Type that is used for mutations to pass in large objects. This will make it easier to call our mutation.

Next up lets create a mutation type in our schema:

```
  type Mutation {
    makeABooking(
      listingId: String
      size: Int,
      bookingDate: String,
      customerEmail: String,
      customers: [InputCustomer]
    ): Booking

  }

```

🌍 We are saying that our makeABooking mutation should take a listingId,size, bookingDate and customerEmail arguments. Then customers is also an argument but we are assigning it as an array of the InputCustomer. This means we can add multiple entires of the customer to our mutation.

The beauty of GraphQL is that it comes with nifty features that REST does not. Best of all any other developers will be able to know how to call this Mutation easily by looking at it in the schema pane in Playground.
