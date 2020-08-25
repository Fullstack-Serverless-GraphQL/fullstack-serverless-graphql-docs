---
path: /create-blue-block-button-react
title: Create Blue Block Button
tag: frontend
date: 2020-07-16T18:35:22.849Z
part: frontend
postnumber: 40
framework: react
chapter: Building reusable components
---

In this chapter we will build out our components that we will be using through out the application. First lets go ahead and create a Secondary button Blue.

In the components folder create a folder called buttons. Then create a BlueBlockButton.js component and add the following:

```
import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import loading from "../../assets/loop.svg";

const rotate = keyframes`
  from {
	  transform: rotate(0deg);
  }
  to {
	  transform: rotate(360deg);
  }
`;
const ImageStyles = styled.img`
  display: inline-block;
  animation: ${rotate} 2s infinite linear;
`;

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
  );
};
const propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  disabled: PropTypes.bool,
  large: PropTypes.bool,
  long: PropTypes.bool,
  isLoading: PropTypes.bool,
};
BlueBlockButton.propTypes = propTypes;
export default BlueBlockButton;


```

Yet again we are doingg something simalr, only difference is that it is a different colour button.

Once you're done it should look like this:

![blueoutline-component](/uploads/blueoutline.png)
