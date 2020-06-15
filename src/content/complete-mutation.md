---
path: /complete-mutation
title: Complete Mutation
tag: 'backend '
date: 2020-05-17T18:55:32.335Z
part: Building backend
chapter: Make a booking mutation
---
Now we are going to complete the mutation. First off let's install some packages:

```
$ yarn add uuid stripe
```

⌛ uuid is used to generate random UUID's for the bookingId. Since Dynamo is a NoSQL datastore it does not auto-generate IDs like a SQL datastore.

⌛ stripe will allow us to interact with the stripe API.

Next lets go into our makeABooking mutation and add the following: 

```
import { v1 as uuidv1 } from "uuid";
import stripePackage from "stripe";
import dynamodb from "../../libs/dynamodb-lib";

export const makeABooking = async (args, context) => {
  //Get the listing that the user selected
  //from the client
  const getPrices = async () => {
    const params = {
      TableName: process.env.ListingsDB || "dev-listings",
      KeyConditionExpression: "listingId = :listingId",
      ExpressionAttributeValues: {
        ":listingId": args.listingId,
      },
    };
    try {
      const listings = await dynamodb.query(params);
      return listings;
    } catch (e) {
      return e;
    }
  };
  
  }
```

⌛ First off we are adding our necessary libs to the file 

⌛ then we are creating a function called getPrices that will go into the listings table and get the listing that matches thee listingId for the listing the customer wants to make a booking for. 

Next up let's calculate the price of the booking:

```javascript
  //set the listing to a variables so we can resuse it
  const listingObject = await getPrices();

  //caLCULATE THE amount to be charged to the
  //customers card

  const bookingCharge =
    parseInt(listingObject.Items[0].price) * args.customers.length;
  //get the name of the listing

  const listingName = listingObject.listingName;
  //create an instance of the stripe lib

  const stripe = stripePackage(process.env.stripeSecretKey);

  //charge the users card

  const stripeResult = await stripe.charges.create({
    source: "tok_visa",
    amount: bookingCharge,
    description: `Charge for booking of listing ${args.listingId}`,
    currency: "usd",
  });
```

⌛ First, we call the function to get the price of the listing

⌛ then we get the total by getting the price of the listing and then multipling it by the amount of travelers on the trip. 

⌛ next we create an instance of the stripe library

⌛ then we create a charge to the customers card. 

Next up we can create the params to send to DynamoDB:

```javascript
  //create the booking in the table
  const params = {
    TableName: process.env.BookingsDB,
    Item: {
      bookingId: uuidv1(),
      listingId: args.listingId,
      bookingDate: args.bookingDate,
      size: args.customers.length > 0 ? args.customers.length : 0,
      bookingTotal: bookingCharge,
      customerEmail: args.customerEmail,
      customers: args.customers,
      createdTimestamp: Date.now(),
      chargeReciept: stripeResult.receipt_url,
      paymentDetails: stripeResult.payment_method_details,
    },
  };
```

⌛ As before we are simply creating a params object that has the necessary TableName, and the fields that match the Booking Type in the schema. We have added a createdTimestamp and paymentDetails fields for internal use that will not be exposed to the API.

Next let's send the params to Dynamo:

```javascript
 try {
    //insert the booking into the table
    await dynamodb.put(params);

    return {
      bookingId: params.Item.bookingId,
      listingId: params.Item.listingId,
      bookingDate: params.Item.bookingDate,
      size: params.Item.size,
      bookingTotal: params.Item.bookingTotal,
      customerEmail: params.Item.customerEmail,
      customers: params.Item.customers.map((c) => ({
        name: c.name,
        surname: c.surname,
        country: c.country,
        passportNumber: c.passportNumber,
        physioScore: c.physioScore,
      })),
      chargeReciept: params.Item.chargeReciept,
    };
  } catch (e) {
    return e;
  }
```

⌛ We are simply doing a put action to Dynamo to insert the mutation into the table.

⌛ Then we are returning the Booking object back to the API.

⌛ In the customers section we are simply mapping over the customers supplied. 

Next let's test the function:

\[Add the playground screenshot]

Now our mutation is working. Now we can write unit test for functions.