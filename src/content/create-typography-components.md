---
path: /create-typography-components
title: Create Typography Components
tag: frontend
date: 2020-05-21T18:09:47.284Z
part: Setup frontend
chapter: Building reusable components
postnumber: 24
framework: vue
---

In this post we will create two typography components that we will use throughout the App for all of our Typography.

First create a folder in the components directory called typography. And create a file called HeadingOne.vue and add the following:

```
<template>
  <p class="text-4xl text-black text-bold font-display">
    <slot> </slot>
  </p>
</template>
<script>
export default {
  name: "HeadingOne",
  props: {
    text: String
  }
};
</script>

```

🛩️ We are creating a paragraph component with a slot inside it that will allow us to add additional content inside it.

🛩️ Then we given it some styles.

Next up create a BodyOne.vue file and add the following:

```
<template>
  <p class="text-sm font-display text-bold text-black">
    <slot> </slot>
  </p>
</template>
<script>
export default {
  name: "BodyOne"
};
</script>

```

🛩️We are doing exactly the same thing only we just made the font smaller.
