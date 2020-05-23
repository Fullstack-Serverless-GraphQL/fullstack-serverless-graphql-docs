---
path: /unit-testing-queries
title: Unit Testing Queries
tag: backend
date: 2020-05-17T19:38:56.861Z
part: Building backend
chapter: Unit testing
---
In this part I'm going to show you how to write Unit tests for your functions. In theory We should've done this first, however, I wanted the GraphQL bits to go down first before we nailing down the unit tests.

in the tests folder create a file called getAllListings.test.js and add the following: 

```javascript
import { getAllListings, getAListing } from "../src/resolvers/query";
describe("All Listings", () => {
  test("brings back all listings", async () => {
    const args = "args";
    const context = "context";

    const response = await getAllListings(args, context);
    expect(response[0]).toHaveProperty("listingId");
    expect(response.length).toBeGreaterThan(1);
  });

}
```

🎯 Jest allows us to first describe the test, then we can call the test function with whatever we want to test.

🎯 In our case we are first making sure it brings back the listings. We call the getAllListings Query and make sure the response has a listingId and it is greater than 1

Next we can test the getAListing function:

```javascript
 test("brings a listing", async () => {
    const args = { listingId: "a114dded-ddef-4052-a106-bb18b94e6b51" };
    const context = "context";

    const response = await getAListing(args, context);
    expect(response.listingId).toEqual(args.listingId);
  });
```

🎯 We are making sure that the listing that comes back matches the listingId we supplied to the query.

Now if you run the following the test should pass:

```
$ yarn test getAllListings.test.js
```

Next  lets test our mutations!