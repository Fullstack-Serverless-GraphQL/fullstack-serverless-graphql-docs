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

In this post we will create an Input component to handle all our inputs.

Create an input directory and create an input.vue file with the following:

```
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

🥤This input component accepts text and has a handleInput method
