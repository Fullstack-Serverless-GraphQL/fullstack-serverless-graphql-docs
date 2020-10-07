---
path: /create-red-outline-button-react
title: Create Red Outline Button
tag: frontend
date: 2020-07-16T18:30:51.947Z
part: frontend
postnumber: 39
framework: react
chapter: Building reusable components
---

In this chapter we will build out our Secondary button.

In the `buttons` folder, create a `RedOutlineButton.js` component and add the following:

```javascript
import React from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"
import loading from "../../assets/loop.svg"

const rotate = keyframes`
  from {
	  transform: rotate(0deg);
  }
  to {
	  transform: rotate(360deg);
  }
`
const ImageStyles = styled.img`
  display: inline-block;
  animation: ${rotate} 2s infinite linear;
`

const RedOutlineButton = ({
  className = "",
  onClick,
  children,
  disabled = false,
  isLoading,
  large,
  long,
  ...props
}) => {
  return (
    <button
      /* eslint-disable no-template-curly-in-string*/
      className={`${className} cursor-pointer bg-white border border-red-light text-red-darkest focus:outline-none font-display rounded-px px-16 py-2 hover:bg-transparent hover:border hover:border-red-darkest`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {isLoading ? <ImageStyles src={loading} alt="loading..." /> : children}
    </button>
  )
}
const propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  disabled: PropTypes.bool,
  large: PropTypes.bool,
  long: PropTypes.bool,
  isLoading: PropTypes.bool,
}
RedOutlineButton.propTypes = propTypes
export default RedOutlineButton
```

We are doing the exact same thing from the `RedBlockButton` we just literally removing the background.

Once you're done it should look like this:

![redoutline-component](/uploads/redoutline.png)
