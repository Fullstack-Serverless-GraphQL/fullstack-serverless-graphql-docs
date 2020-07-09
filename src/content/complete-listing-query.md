---
path: /complete-listings-query
title: Complete Listing Query
tag: backend
date: 2020-05-13T18:27:10.974Z
part: Building backend
chapter: All listings query
postnumber: 12
---

In this part we get the data from Dynamo And return it.

Back in our query.js file we can import the dynamoDB wrapper at the top of the file:

```
import * as dynamoDBLib from "../../libs/dynamodb-lib";

```

Next up we can create the parameters for our DynamoDB operation:

```
const params = {
    TableName: process.env.ListingsDB || "dev-listings"
  };
```

Just a simple object that has the tablename. reason why we have the or operator is for when we test, Jest cannot pickup the .env file.

Next we have a try catch block that will help us fetch the data and return it:

```
  try {
    const result = await dynamoDBLib.call("scan", params);

    if (result.Items.length === 0) {
      return "You have no listings";
    } else {
      return result.Items.map((i) => ({
        listingId: i.listingId,
        coverPhoto: i.coverPhoto,
        listingName: i.listingName,
        listingDescription: i.listingDescription,
        listingType: i.listingType.map((m) => ({
          name: m,
        })),
        listingLocation: i.listingLocation,
        listingActivities: i.listingActivities.map((k) => ({
          name: k,
        })),
        specialType: i.specialType,
        specialAmount: i.specialAmount,
        rating: i.rating,
        guide: {
          Name: i.guide.name,
          Bio: i.guide.bio,
          Avatar: i.guide.avatar,
        },
        price: i.price,
        numberOfDays: i.numberOfDays,
      }));
    }

    // return result;
  } catch (e) {
    return {
      message: e.message,
      code: "500x",
    };
  }
```

🔋First we return a promise and execute a scan on Dynamo and pass through our params object.

🔋We have an if - else block to check if the is no listings, if they are return all the listings

🔋Because we are returning an array we need to map over each element in the array and returning each field in the object.

🔋In the case of the ListingType & ListingActivies these are nested arrays within the listing object itself, which we look over to return each element in the array.

🔋 In the case of the guide all we are doing is return back the properites in the guide object.

🔋 Lastly we return an error message and code in the case anything fails.

Next lets now go to Playground and test the query by executing the following query:

[ADD PLAYGROUND IMAGE]

Now the function returns our data as we have shaped it.
