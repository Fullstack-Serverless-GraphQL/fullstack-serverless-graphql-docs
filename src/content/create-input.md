---
path: /create-input
title: Create Input
tag: frontend
date: 2020-05-21T18:50:13.817Z
part: Setup frontend
chapter: Building reusable components
postnumber: 22
framework: vue
---

In this post we will create an Input component to handle all our input related needs.

Create an `input` directory and create an `input.vue` file with the following:

```javascript
<template>
  <input
    class="
   bg-white
    rounded-px
    py-3
    px-16
    border
    border-grey-light
    focus:outline-none
    focus:bg-white"
    type="text"
    :placeholder="placeholder"
    @input="handleInput"
  />
</template>
<script>
export default {
  name: "Input",
  props: {
    placeholder: String
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

```

🥤This input component accepts text and has a `handleInput` method.
🥤 `this.$emit` helps us store the value of the component if we are calling it from a component higher up the tree.

Once you're done it should look like this:

![input-component](/uploads/input.png)
