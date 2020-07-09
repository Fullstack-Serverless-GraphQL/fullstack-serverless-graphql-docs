---
path: /create-nav-header
title: Create Nav and Header
tag: frontend
date: 2020-05-21T18:36:34.895Z
part: Setup frontend
chapter: Building reusable components
postnumber: 23
framework: vue
---

In this post we will create a Navigation bar and a Header component for our landing page.

Go head and create a navs folder and create a Nav.vue file with the following:

```
<template>
  <nav
    class="nav border-top flex items-center justify-between flex-wrap bg-transparent p-6 z-100"
  >
    <div class="flex items-center flex-no-shrink text">
      <h1 class="font-display text-red text-2xl">
        <a class="no-underline text-red" href="/">Lunar</a>
      </h1>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Nav"
};
</script>
<style scoped>
.nav {
  transition: background-color 1s ease 0s;
}
</style>

```

🌞 We have an HTML Nav bar that is is responsive and allows the user to redirect to the Home page of the site.

Next up create a headers folder and create a file called LandingHeader.vue with the following contents:

```
<template>
  <div class="image text-center bg-transparent " :style="urlProps">
    <h1 class="text-white font-display text-5xl pt-44 s:text-4xl">
      <div v-if="text">
        {{ text }}
      </div>
      <div v-else></div>
    </h1>
  </div>
</template>
<script>
export default {
  name: "Landing Header",
  props: {
    imgURL: String,
    text: String,
    margin: String
  },
  computed: {
    urlProps() {
      return "--img-url:" + `url(${this.imgURL})`;
    }
  }
};
</script>
<style>
.image {
  background: var(--img-url) no-repeat center center;
  background-size: cover;
  height: 570px;
  margin-top: -85px;
}
</style>

```

🌞In this div have a v-if statement that accepts text to be displayed

🌞 There is also a computed style prop that accepts an image url that will display a picture in the background based on the image URL.

🌞Then we have Vanilla CSS styles for this component as you are unable to replicate this in TailwindCSS.
