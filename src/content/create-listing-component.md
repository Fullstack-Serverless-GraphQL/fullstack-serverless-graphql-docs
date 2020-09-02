---
path: /create-listing-component
title: Create Listing Component
tag: frontend
date: 2020-05-25T16:01:51.200Z
part: Build frontend
chapter: View Listing
postnumber: 32
framework: vue
---

In this section we will start with building the component to allow our users to be able to view every individual listing.

Fist head over to the `router.js` file and add the new route:

```javascript
import Listing from "./pages/Listing"

const routes = [
  {
    path: "/listing/:id",
    component: Listing,
  },
]
```

The ":id" in the URL will tell the router to put id of the listing in the URL whenever it is navigated to. This will also allow us to send the id of that specific Listing to API for us to fetch.

Next up create a `Listing.vue` file in the pages folder and add the following:

```javascript
<template>
  <div>
    <ApolloQuery
      :query="require('../graphql/getAListing.gql')"
      :variables="{ listingId: this.$route.params.id.toString() }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo text-red">
          <a-skeleton active />
        </div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo text-red">
          An error occurred {{ error.message }}
        </div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <LandingHeader :imgURL="data.getAListing.coverPhoto" />

          <div class="grid p-5 mt-10">
            <div class="mr-16">
              <HeadingOne
                class="font-display  font-semibold text-3xl text-black"
              >
                {{ data.getAListing.listingName }}
              </HeadingOne>
              <HeadingThree class="text-black mt-4 mb-8">
                {{ data.getAListing.listingLocation }}
              </HeadingThree>
              <HeadingThree
                class=" font-bold  text-center s:text-left mb-5 text-black "
              >
                $ {{ data.getAListing.price }}
              </HeadingThree>
              <BodyOne class="text-left text-black ">
                {{ data.getAListing.listingDescription }}
              </BodyOne>

              <HeadingTwo class=" font-bold text-black mt-10">
                Trip ammenities
              </HeadingTwo>

              <div
                class="flex flex-row p-3"
                v-for="(types, index) in data.getAListing.listingType"
                :key="index"
              >
                <img src="../assets/trip_type.svg" />
                <p class="font-display ml-2">{{ types.name }}</p>
              </div>

              <HeadingTwo class=" font-bold text-black  mt-10">
                Activites
              </HeadingTwo>
              <div
                class="flex flex-row p-3"
                v-for="(activies, index) in data.getAListing.listingActivities"
                :key="index"
              >
                <img src="../assets/trip_activity.svg" />
                <BodyOne class="font-display ml-2">{{ activies.name }}</BodyOne>
              </div>
            </div>
            <div class="flex flex-col ">
              <div>
                <RedBlockButton
                  class=" text-center s:pr-20 mb-10 mt-10"
                  @click.native="forward"
                  >Book</RedBlockButton
                >
              </div>
              <div>
                <HeadingThree
                  class="font-display text-xl   text-black mt-10 mb-10"
                >
                  Your guide
                </HeadingThree>
                <img
                  :src="data.getAListing.guide.Avatar"
                  alt="guide"
                  class="rounded-lg h-48"
                />
              </div>
              <div>
                <HeadingThree class="text-black mt-10">
                  {{ data.getAListing.guide.Name }}
                </HeadingThree>
                <BodyOne class=" text-black mt-5 ">
                  {{ data.getAListing.guide.Bio }}
                </BodyOne>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
import LandingHeader from "../components/navs/LandingHeader";
import RedBlockButton from "../components/buttons/RedBlockButton";
import Typography from "../components/typography";
const { HeadingOne, HeadingTwo, HeadingThree, BodyOne } = Typography;
export default {
  name: "Listing",
  components: {
    LandingHeader,
    RedBlockButton,
    HeadingOne,
    HeadingThree,
    BodyOne,
    HeadingTwo,
  },
  methods: {
    forward() {
      this.$router.push(`/booking/${this.$route.params.id}`);
    },
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
</style>

```

🌶️ Similar to the landing page wee have an Apollo Query Component that will allow us to fetch the data for the listing and gives variables for the data, error and loading states.

🌶️ In our template slot we first check for the Loading state to be true. then render a loading state.

🌶️ Same thing for the error state

🌶️ Then in the data part we are rending all the data associated with the Listing.

Next up lets go ahead and add a schema document in the `graphql` folder called `getAListing.gql`:

```javascript
query GetAListing($listingId: String!) {
  getAListing(listingId: $listingId) {
    coverPhoto
    listingId
    listingName
    listingType {
      name
    }
    listingLocation
    listingActivities {
      name
    }
    listingDescription
    price
    numberOfDays
    guide {
      Bio
      Name
      Avatar
    }
    specialType
  }
}
```

So if you click on any other listings you should be good to go.

Now you should be able to view any listing.

![view-a-listing](/uploads/viewlisting.png)
