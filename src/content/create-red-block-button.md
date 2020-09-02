---
path: /create-red-block-button
title: Create Red Block Button
tag: frontend
date: 2020-05-21T17:49:41.084Z
part: Setup frontend
chapter: Building reusable components
postnumber: 25
framework: vue
---

In this chapter we will build out our components that we will be using through out the application. First lets go ahead and create a Primary button.

In the components folder create a folder called buttons. Then create a RedBlockButton.vue component and add the following:

```javascript
<template>
  <button
    @click="handleClick"
    class="cursor-pointer bg-white border
    border-red-light text-red-darkest focus:outline-none
    font-display rounded-px px-16 py-2 hover:bg-transparent
    hover:border hover:border-red-darkest"
  >
    <div v-if="isLoading">
      <img
        aria-label="loading-spinner"
        class="spinner"
        src="../../assets/loop.svg"
      />
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  name: "RedOutlineButton",
  props: {
    isLoading: Boolean,
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>
<style>
.spinner {
  display: inline-block;
  animation: rotate 2s infinite linear;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>



```

🧁In the template part we have a button with a handle click event.

🧁 with a v-if statement that is triggered if the isLoading prop is set to true. It will show the loading the loading spinner.

🧁 We have a method that emits a click event.

Once you're done it should look like this:

![redblock-component](/uploads/redblock.png)
