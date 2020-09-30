---
path: /adding-listings-to-dynamo
title: Adding listings to Dynamo
tag: backend
date: 2020-05-11T18:19:27.334Z
part: Building backend
chapter: Adding libraries
postnumber: 9
---

In this post we will manually add listings to DynamoDB. Usually we could create a mutation to add listings for someone. But for the sake of this course I've created all the listings for you.

First off lets create a folder called `/seed-data` and create file called `listings.json`. Then head over to this [gist](https://gist.github.com/AmoDinho/49fe02084d5634ce4bf76ff544042196) and copy the contents of it into the file you've just created.

Then create a file called `insertData.js` and add the following:

```javascript
/*

this function will allow us to add all the listings into Dynamo dynamically
*/

//set up the aws-sdk
const AWS = require("aws-sdk")
AWS.config.update({ region: "us-east-1" })
const docClient = new AWS.DynamoDB.DocumentClient()

//import the listings json
const listings = require("./listings.json")
console.log("Listings.Init", listings)

//lets inseert them into the table
//loop over the listings
listings.map(l => {
  //create params object
  listingParams = {
    TableName: "dev-lunar-listings",
    Item: {
      coverPhoto: l.coverPhoto,
      guide: {
        avatar: l.guide.avatar,
        bio: l.guide.bio,
        name: l.guide.name,
      },
      listingActivities: l.listingActivities,
      listingDescription: l.listingDescription,
      listingId: l.listingId,
      listingLocation: l.listingLocation,
      listingName: l.listingName,
      listingType: l.listingType,
      numberOfDays: l.numberOfDays,
      price: l.price,
      rating: l.rating,
      specialAmount: l.specialAmount,
      specialType: l.specialType,
    },
  }

  //put the data into the table

  docClient.put(listingParams, function(err, data) {
    if (err) {
      console.error(
        "Unable to add listing",
        user.name,
        ". Error JSON:",
        JSON.stringify(err, null, 2)
      )
    } else {
      console.log("PutItem succeeded:")
    }
  })
})
```

🌶️ First off we setup the AWS SDK

🌶️ Then we import the JSON file with the listings.

🌶️ Loop over them to create a record in the table.
