---
path: /create-react-input
title: Create Input
tag: frontend
date: 2020-07-16T18:05:53.809Z
part: frontend
postnumber: 35
framework: react
chapter: Building reusable components
---

In this section we will embark on creating UI components for the application. The reason why I like creating basic components like inputs,buttons etc from scratch is because I will always have control over the styling and not need to overwrite CSS classes.

Usually I create a component library and package it to NPM and import it into my app, but that would be overkill for such a small project like this.

First up under the `components` folder, create a folder called `inputs`, then create a file called `input.js` and paste the following:

```javascript
import React from "react"
import PropTypes from "prop-types"

const Input = ({ className, value, onChange, ...props }) => {
  return (
    <input
      className={`${className} 
      bg-white 
      rounded-px 
      py-3
      px-16 
      border
      border-grey-light 
      focus:outline-none 
      focus:bg-white"`}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}

const propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}
Input.propTypes = propTypes
export default Input
```

Here we have a basic input component that can accept a couple of props and events. Once you're done it should look like this:

![input-component](/uploads/input.png)
