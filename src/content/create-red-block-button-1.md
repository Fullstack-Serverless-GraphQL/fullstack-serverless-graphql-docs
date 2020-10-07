---
path: /create-red-block-button-react
title: Create Red Block Button
tag: frontend
date: 2020-07-16T18:25:31.189Z
part: frontend
postnumber: 38
framework: react
chapter: Building reusable components
---

As we continue to build out these components we need a couple of buttons. So we will build our "Primary Button"

In the components folder create a folder called `buttons`. Then create a `RedBlockButton.js` component and add the following:

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

const BlueBlockButton = ({
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
      className={`${className} cursor-pointer bg-blue-lightest text-blue-darkest focus:outline-none font-display rounded-px px-16 py-2 hover:bg-transparent hover:border hover:border-blue-darkest`}
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
BlueBlockButton.propTypes = propTypes
export default BlueBlockButton
```

🧁 Generally buttons have a spinner inside them to allow you to accept a signal that after you click on it that it is loading after making a call to an API or something. That is why we use StyledComponents and a basic CSS animation to get the icon to spin.

🧁 Then we have a couple of Props and events passed into the button.

🧁 Now we have a ternary operator to see if the `isLoading` prop is true, if so render the Loading spinner. If not render the children in the button.

Once you're done it should look like this:

![redblock-component](/uploads/redblock.png)

Now it is really easy to pull something out of Bootstrap or your fav library. However, I've found this a lot easier in cases when a designer has custom button button designs. It takes longer to find the necessary CSS class to override than to just write HTML and JavaScript to create things.
