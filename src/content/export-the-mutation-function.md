---
path: /export-the-mutation
title: Export the Mutation Function
tag: backend
date: 2020-05-17T18:39:53.692Z
part: Building backend
chapter: Make a booking mutation
postnumber: 15
---

In this chapter we just set up our mutation by exporting it.

In the mutation.js file add the following function:

```javascript
export const makeABooking = async (args, context) => {
  return null
}
```

Then head over the the index of the resolvers and import it:

```javascript
import { makeABooking } from "./mutation"
export const resolvers = {
  Mutation: {
    makeABooking: (root, args, context) => makeABooking(args, context),
  },
}
```

Your resolvers index should look like this:

```javascript
import { getAllListings, getAListing } from "./query"
import { makeABooking } from "./mutation"
export const resolvers = {
  Query: {
    getAllListings: (root, args, context) => getAllListings(args, context),
    getAListing: (root, args, context) => getAListing(args, context),
  },
  Mutation: {
    makeABooking: (root, args, context) => makeABooking(args, context),
  },
}
```

Next up we setup a Stripe Account
