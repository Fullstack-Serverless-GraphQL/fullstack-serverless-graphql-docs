---
path: /create-schema-for-a-listings
title: Create Schema For A Listings
tag: backend
date: 2020-05-14T17:42:07.163Z
part: Building backend
chapter: Get A Listing Query
---
In this chapter we will attempt to get a single a listing from Dynamo when given a listingID.

To do this let's edit our schema and add the following query:

```
    getAListing(listingId: String!): Listing!
```

 Your Query Type should now look like this:

```
  type Query {
    getAllListings: [Listing]
    getAListing(listingId: String!): Listing!
  }
```

Next lets go ahead and export our getAListing query. Go into the query.js file and add the following:

```javascript
export const getAListing = async (args,context) =>{
  return null
}
```

Then finally import it into the index for the resolvers: 

```javascript
import { getAllListings, getAListing } from "./query";
export const resolvers = {
  Query: {
    getAllListings: (root, args, context) => getAllListings(args, context),
    getAListing: (root, args, context) => getAListing(args, context)
  }
};
```

Next out will flesh out the function.