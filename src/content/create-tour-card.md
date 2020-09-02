---
path: /create-tour-card
title: Create Tour Card
tag: frontend
date: 2020-05-21T18:58:35.008Z
part: Setup frontend
chapter: Building reusable components
postnumber: 29
framework: vue
---

In this post we will make a tour card that will allow us to display all our listings.

Create a cards directory and create TourCard.vue file:

```javascript
<template>
  <div class="rounded-px w-card h-auto shadow-lg-card cursor-pointer">
    <img :src="coverPhoto" class="w-full h-48 rounded-t-px" />
    <div class="flex flex-col p-2">
      <div class="flex flex-row mt-2 ">
        <BodyOne class="text-lg text-black font-display">{{
          listingTitle
        }}</BodyOne>
        <BodyOne class=" text-sm text-grey">{{ listingLocation }}</BodyOne>
      </div>

      <BodyOne class="text-green-dark text-lg mt-8">${{ price }}</BodyOne>
      <a-rate :default-value="rating" disabled />
    </div>
  </div>
</template>
<script>
import Typography from "../typography/";
const { BodyOne } = Typography;
export default {
  name: "ListingCard",
  components: {
    BodyOne,
  },
  props: {
    listingTitle: String,
    listingLocation: String,
    price: String,
    rating: Number,
    coverPhoto: String,
  },
};
</script>

```

Once you're done, it will look like this:

![tour-card](/uploads/tourcard.png)
