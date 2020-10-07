---
path: /create-remove-button
title: Create Remove Button
tag: frontend
date: 2020-05-21T18:03:52.094Z
part: Setup frontend
chapter: Building reusable components
postnumber: 28
framework: vue
---

In this chapter we will build out a Remove button.

In the `buttons` folder, create a `RemoveButton.vue` component and add the following:

```javascript
<template>
  <button
    @click="handleClick"
    class="bg-white cursor-pointer text-red-darkest focus:outline-none font-display  px-16 py-2 cursor:pointer"
  >
    <div class="flex flex-row">
      <img src="../../assets/remove.svg" />
      <p class="text-sm font-display text-bold ml-3 ">Remove</p>
    </div>
  </button>
</template>
<script>
export default {
  name: "RemoveButton",
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>


```

🧁In the template part we have a button with a handle click event.

🧁 Then if the `v-if` statement is triggered the isLoading prop is set to true. It will show the loading spinner.

🧁 We have a method that emits a click event.

Once you're done, it will look like this:

![remove-button](/uploads/remove.png)
