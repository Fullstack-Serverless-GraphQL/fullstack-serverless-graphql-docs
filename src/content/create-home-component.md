---
path: /create-home-component
title: Create Home Component
tag: frontend
date: 2020-05-22T17:00:59.770Z
part: Build frontend
chapter: Landing Page
---
In this part we will create the following landing page based on this mockup \[add link to mockup]

First create a Home.vue component in the Views directory. Then go into the router.js and add the following route. 

```javascript
{
    path: "/",
    component: Home
  }
```

Also import the file at the top of the page:

```javascript
import Home from "./pages/Home";

```

Next up open the Home.vue component and copy the following:

```javascript
<template>
  <div>
    <LandingHeader
      margin="-85"
      text="Book Vacations to Different Lunar Destinations"
      imgURL="https://moon.nasa.gov/system/resources/detail_files/187_detail_as11-44-6551_orig.jpg"
    />
    <ApolloQuery :query="require('../graphql/getAllListings.gql')">
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="loading" class="text-red">
          <a-skeleton active />
        </div>
        <div v-if="error" class="text-red">error...</div>

        <div v-else-if="data" class="grid grid-cols-3 col-gap-32 p-10">
          <div v-for="listing of data.getAllListings" :key="listing.listingId">
            <router-link
              :to="{
                path: `listing/${listing.listingId}`,
                params: { id: listing.listingId }
              }"
              class="no-underline"
            >
              <TourCard
                :listingTitle="listing.listingName"
                :listingLocation="listing.listingLocation"
                :price="listing.price"
                :rating="listing.rating"
                :coverPhoto="listing.coverPhoto"
                class="mt-32"
              />
            </router-link>
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
import LandingHeader from "../components/headers/LandingHeader.vue";
import TourCard from "../components/cards/TourCard";
export default {
  name: "Home",
  components: {
    LandingHeader,
    TourCard
  }
};
</script>
<style>
/* .grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
} */
</style>

```

What is happening here ?

🍣 First we are using the LandingHeader component to create the header. We passing the text and the image URL.

🍣Next up are querying the API by using the ApolloQuery component. We indicate that we are using are a query and reading a query document which we will make soon.

🍣In the template under the Apollo Query we pass in a v-slot that has an result object with loading, error and data variables.

🍣In our V-If we check that if the loading variable is true and we show a loading component

🍣Next we check if the error variable is true and tell the user that an error occurred. You can customize this with anything you want. 

🍣Else if the data is present render all the data. we have a v-for that we loop over from the data.getAllListings query. Then we give it the key of the listingId.

🍣We have a router-link wrapped around the TourCard to redirect the user to the view  of the listing.

🍣Then we pass the data of the listing into the props of the Tour Card.

Next we need to create the query schema document. create a folder called graphql and create  a filed called getAllListings.gql and paste the following:

```
query GetAllListings {
  getAllListings {
    listingId
    coverPhoto
    listingName
    listingLocation
    rating
    price
  }
}

```

So if we go to the landing page in the browser we should see all the listings load.