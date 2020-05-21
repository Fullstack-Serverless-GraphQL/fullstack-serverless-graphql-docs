---
path: /create-remove-button
title: Create Remove Button
tag: frontend
date: 2020-05-21T18:03:52.094Z
part: Setup frontend
chapter: Building reusable components
---
In this chapter we will build out our components that we will be using through out the application. First lets go ahead and create a Remove button.



In the components folder create a folder called buttons. Then create a RemoveButton.vue component and add the following:

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

🧁 with a v-if statement that is triggered if the isLoading prop is set to true. It will show the loading the loading spinner.

🧁 We have a method that emits a click event.