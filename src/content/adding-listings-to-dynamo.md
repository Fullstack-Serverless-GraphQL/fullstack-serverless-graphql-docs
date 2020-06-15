---
path: /adding-listings-to-dynamo
title: Adding listings to Dynamo
tag: backend
date: 2020-05-11T18:19:27.334Z
part: Building backend
chapter: Adding libraries
---
In this post we will add listings to DynamoDB dynamically. 

First off lets create a folder called /seed-data and create file called listings.json and add the following:



```json
[
  {
    "coverPhoto": "https://live.staticflickr.com/5687/21672342752_a0ca8434da_b.jpg",
    "guide": {
      "avatar": "https://randomuser.me/api/portraits/women/71.jpg",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus unde veniam harum magnam molestias dignissimos omnis architecto, quod, obcaecati dolorum debitis dolore porro qui, iusto quo accusantium voluptates pariatur illo",
      "name": "Paige Van Der Roen"
    },
    "listingActivities": [
      "Deep space food production",
      "Soil studies",
      "Botany expirements"
    ],
    "listingDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia corporis earum, rerum doloremque dolorum modi voluptates, eligendi? Minus cupiditate placeat, eveniet ad beatae animi illum nihil officia nulla, impedit sapiente.",
    "listingId": "14cd7707-e687-44e2-b982-4263d7599834",
    "listingLocation": "Stöfler",
    "listingName": "Lunar Food Farm",
    "listingType": ["Lab", "Hands on", "Come hungry"],
    "numberOfDays": 7,
    "price": "220.00",
    "rating": 2,
    "specialAmount": 0,
    "specialType": "none"
  },
  {
    "coverPhoto": "https://www.nasa.gov/sites/default/files/thumbnails/image/as15-88-11901orig.jpg",
    "guide": {
      "avatar": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus unde veniam harum magnam molestias dignissimos omnis architecto, quod, obcaecati dolorum debitis dolore porro qui, iusto quo accusantium voluptates pariatur illo",
      "": "Arina Mulke"
    },
    "listingActivities": ["2hr Lunar Rides"],
    "listingDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia corporis earum, rerum doloremque dolorum modi voluptates, eligendi? Minus cupiditate placeat, eveniet ad beatae animi illum nihil officia nulla, impedit sapiente.",
    "listingId": "2dd77a8b-ff23-43f7-8694-e05807cf359f",
    "listingLocation": "Picard",
    "listingName": "Lunar Rovering",
    "listingType": ["Hotel Avaialble", "Oxygen Avaialble", "8G Internet"],
    "numberOfDays": 5,
    "price": "250.00",
    "rating": 4,
    "specialAmount": 50,
    "specialType": "Lighting Special"
  },
  {
    "coverPhoto": "https://live.staticflickr.com/762/21472225870_b3d006b973_b.jpg",
    "guide": {
      "avatar": "https://pbs.twimg.com/profile_images/883458234685587456/KtCFjlD4.jpg",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus unde veniam harum magnam molestias dignissimos omnis architecto, quod, obcaecati dolorum debitis dolore porro qui, iusto quo accusantium voluptates pariatur illo",
      "name": "Lovemore Buthi"
    },
    "listingActivities": ["Telescope viewing", "Tech tour"],
    "listingDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia corporis earum, rerum doloremque dolorum modi voluptates, eligendi? Minus cupiditate placeat, eveniet ad beatae animi illum nihil officia nulla, impedit sapiente.",
    "listingId": "2ee2a78e-c707-456d-9b9a-7c9614ce10a2",
    "listingLocation": "Pitatus",
    "listingName": "Lunar Observatory",
    "listingType": ["Moderately Activate", "Interactive sessions"],
    "numberOfDays": 1,
    "price": "355.00",
    "rating": 5,
    "specialAmount": 0,
    "specialType": "None"
  },
  {
    "coverPhoto": "https://live.staticflickr.com/762/21472225870_b3d006b973_b.jpg",
    "guide": {
      "avatar": "https://pbs.twimg.com/profile_images/883458234685587456/KtCFjlD4.jpg",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus unde veniam harum magnam molestias dignissimos omnis architecto, quod, obcaecati dolorum debitis dolore porro qui, iusto quo accusantium voluptates pariatur illo",
      "name": "Lovemore Buthi"
    },
    "listingActivities": ["Telescope viewing", "Tech tour"],
    "listingDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia corporis earum, rerum doloremque dolorum modi voluptates, eligendi? Minus cupiditate placeat, eveniet ad beatae animi illum nihil officia nulla, impedit sapiente.",
    "listingId": "2ee2a78e-c707-456d-9b9a-7c9614ce10a2",
    "listingLocation": "Pitatus",
    "listingName": "Lunar Observatory",
    "listingType": ["Moderately Activate", "Interactive sessions"],
    "numberOfDays": 1,
    "price": "355.00",
    "rating": 5,
    "specialAmount": 0,
    "specialType": "None"
  },
  {
    "coverPhoto": "https://live.staticflickr.com/5650/21639917782_05f57bce5c_k.jpg",
    "guide": {
      "avatar": "https://randomuser.me/api/portraits/men/78.jpg",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus unde veniam harum magnam molestias dignissimos omnis architecto, quod, obcaecati dolorum debitis dolore porro qui, iusto quo accusantium voluptates pariatur illo",
      "name": "Mando Tano"
    },
    "listingActivities": [
      "Propellent testing",
      "Engine manufacturing",
      "Engine CAD modeling",
      "Propellent manufacturing"
    ],
    "listingDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia corporis earum, rerum doloremque dolorum modi voluptates, eligendi? Minus cupiditate placeat, eveniet ad beatae animi illum nihil officia nulla, impedit sapiente.",
    "listingId": "550e123d-710a-4d6d-8ee6-4ad3e4c7b087",
    "listingLocation": "Aristarchus",
    "listingName": "Propellent Plant",
    "listingType": [
      "Hazaradous",
      "Instructor reliant",
      "Hands on",
      "Mind boggling"
    ],
    "numberOfDays": 3,
    "price": "230.00",
    "rating": 3,
    "specialAmount": 0,
    "specialType": "none"
  },
  {
    "coverPhoto": "https://live.staticflickr.com/782/21060916274_a57e1bf901_b.jpg",
    "guide": {
      "avatar": "https://pbs.twimg.com/profile_images/642171524569427968/z2S0ttIf.jpg",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus unde veniam harum magnam molestias dignissimos omnis architecto, quod, obcaecati dolorum debitis dolore porro qui, iusto quo accusantium voluptates pariatur illo",
      "name": "Martin Brundle"
    },
    "listingActivities": [
      "Hubble maintainace",
      "Earth satilite control",
      "Lightspeed research"
    ],
    "listingDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia corporis earum, rerum doloremque dolorum modi voluptates, eligendi? Minus cupiditate placeat, eveniet ad beatae animi illum nihil officia nulla, impedit sapiente.",
    "listingId": "6a33bba5-d955-4e38-aa7e-21f1c0734d49",
    "listingLocation": "Copernicus",
    "listingName": "Satelite/Probe Facility",
    "listingType": ["Lab", "Hands on", "Tech heavy"],
    "numberOfDays": 7,
    "price": "100.00",
    "rating": 4,
    "specialAmount": 0,
    "specialType": "none"
  },
  {
    "coverPhoto": "https://live.staticflickr.com/711/21654854445_9f9f3bd6e1_b.jpg",
    "guide": {
      "avatar": "https://pbs.twimg.com/profile_images/1051157346796400646/t33XAm04.jpg",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus unde veniam harum magnam molestias dignissimos omnis architecto, quod, obcaecati dolorum debitis dolore porro qui, iusto quo accusantium voluptates pariatur illo",
      "name": "Kevin Parker"
    },
    "listingActivities": ["2hr hike", "Crater walks", "Camping"],
    "listingDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia corporis earum, rerum doloremque dolorum modi voluptates, eligendi? Minus cupiditate placeat, eveniet ad beatae animi illum nihil officia nulla, impedit sapiente.",
    "listingId": "6fb8fcbd-7ed3-45b6-b2ba-5bb99d7024e2",
    "listingLocation": "Plinius",
    "listingName": "Lunar Crater Hiking",
    "listingType": ["High risk", "Long exposure to Solar radiation"],
    "numberOfDays": 5,
    "price": "500.00",
    "rating": 5,
    "specialAmount": 0,
    "specialType": "High Demand"
  },
  {
    "coverPhoto": "https://live.staticflickr.com/672/21281789484_0d7a257ec0_b.jpg",
    "guide": {
      "avatar": "https://randomuser.me/api/portraits/men/80.jpg",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus unde veniam harum magnam molestias dignissimos omnis architecto, quod, obcaecati dolorum debitis dolore porro qui, iusto quo accusantium voluptates pariatur illo",
      "name": "Nikola Tesla"
    },
    "listingActivities": ["Weapons demo", "Weapons materials creation"],
    "listingDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia corporis earum, rerum doloremque dolorum modi voluptates, eligendi? Minus cupiditate placeat, eveniet ad beatae animi illum nihil officia nulla, impedit sapiente.",
    "listingId": "a114dded-ddef-4052-a106-bb18b94e6b51",
    "listingLocation": "Piccolomini",
    "listingName": "Advanced Weapons Testing",
    "listingType": [
      "Hotel Avaialble",
      "Oxygen Avaialble",
      "Outside excursions"
    ],
    "numberOfDays": 2,
    "price": "195.00",
    "rating": 2,
    "specialAmount": 0,
    "specialType": "None"
  },
  {
    "coverPhoto": "https://live.staticflickr.com/5664/21061385534_ab38aec9e0_b.jpg",
    "guide": {
      "avatar": "https://pbs.twimg.com/profile_images/834493671785525249/XdLjsJX_.jpg",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus unde veniam harum magnam molestias dignissimos omnis architecto, quod, obcaecati dolorum debitis dolore porro qui, iusto quo accusantium voluptates pariatur illo",
      "name": "Antaya Valire"
    },
    "listingActivities": [
      "Rock collecting",
      "Crater absailing",
      "Geology decomposition"
    ],
    "listingDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia corporis earum, rerum doloremque dolorum modi voluptates, eligendi? Minus cupiditate placeat, eveniet ad beatae animi illum nihil officia nulla, impedit sapiente.",
    "listingId": "c01682a0-aabf-40f2-b564-20364aa966ed",
    "listingLocation": "Metius",
    "listingName": "Geology Center",
    "listingType": ["Hands on", "Field work", "Dangerous"],
    "numberOfDays": 7,
    "price": "156.00",
    "rating": 3,
    "specialAmount": 0,
    "specialType": "none"
  },
  {
    "coverPhoto": "https://live.staticflickr.com/749/21657696456_bbc6974617_b.jpg",
    "guide": {
      "avatar": "https://faces.design/faces/m/m10.png",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus unde veniam harum magnam molestias dignissimos omnis architecto, quod, obcaecati dolorum debitis dolore porro qui, iusto quo accusantium voluptates pariatur illo",
      "name": "Dimpho Mgodpo"
    },
    "listingActivities": [
      "Solar system data viewing",
      "Parker probe access",
      "Deep space networking tuts"
    ],
    "listingDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia corporis earum, rerum doloremque dolorum modi voluptates, eligendi? Minus cupiditate placeat, eveniet ad beatae animi illum nihil officia nulla, impedit sapiente.",
    "listingId": "c214b19f-720b-48c8-8855-2c13dd613ed5",
    "listingLocation": "Rheita",
    "listingName": "Deep Space Network Facility",
    "listingType": [
      "Lab",
      "Oxygen Avaialble",
      "Highly interlectuall",
      "Drug free"
    ],
    "numberOfDays": 1,
    "price": "100.00",
    "rating": 2,
    "specialAmount": 0,
    "specialType": "none"
  }
]

```

Then create a file called insertData.js and add the following: 



```javascript
/*

this function will allow us to add all the listings into Dynamo dynamically
*/

//set up the aws-sdk
const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const docClient = new AWS.DynamoDB.DocumentClient();

//import the listings json
const listings = require("./listings.json");
console.log("Listings.Init", listings);

//lets inseert them into the table
//loop over the listings
listings.map((l) => {
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
  };

  //put the data into the table

  docClient.put(listingParams, function (err, data) {
    if (err) {
      console.error(
        "Unable to add listing",
        user.name,
        ". Error JSON:",
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log("PutItem succeeded:");
    }
  });
});

```



🌶️  First off we setup the AWS SDK

🌶️  Then we import the JSON file with the listings.

🌶️  Loop over them to create a record in the table.