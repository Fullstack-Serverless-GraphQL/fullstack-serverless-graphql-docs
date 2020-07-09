---
path: /create-schema
title: Creating our GraphQL schema
tag: backend
date: 2020-05-13T17:49:01.060Z
part: Building backend
chapter: All listings query
postnumber: 10
---

Now we finally get to the core of this course! We will start building our first query that will allow us to grab all the lunar destinations from DynamoDB.

So let's go into our `schema.js` file and add the necessary types to get a query running:

```
type ListingType {
  name: String
}

type ListingActivities {
  name: String
}

type Guide {
  Name: String
  Bio: String
  Avatar: String
}

type Listing {
     listingId: String
     coverPhoto: String
     listingName: String
     listingDescription: String
     listingType: [ListingType]
     listingLocation: String
     listingActivities: [ListingActivities]
     specialType: String
     specialAmount: Int
     rating: Int
     guide: Guide
     price: String
     numberOfDays: Int

  }
```

What are we doing here:

🔋We are creating three separate types (`ListingType`, `ListingActivities` & `Guide`) to be able to see these types in our `Listing` type.

🔋We are creating a `Listing` type that has the various attributes we need for this data type.

Next up we will set up the query type :

```
type Query {
    getAllListings: [Listing]
  }
```

🔋 We creating a `getAllListings` query that will return an array of the `Listings`.

So now we went through the process of adding editing our Schema in an SDL manner to create a query.
