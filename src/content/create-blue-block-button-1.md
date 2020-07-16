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
  text,
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
      {isLoading === true ? (
        <ImageStyles src={loading} alt="loading..." />
      ) : (
        text
      )}
    </button>
  );
};
const propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  large: PropTypes.bool,
  long: PropTypes.bool,
  isLoading: PropTypes.bool,
};
BlueBlockButton.propTypes = propTypes;
export default BlueBlockButton;

```



🧁In the template part we have a button with a handle click event.

🧁 with a v-if statement that is triggered if the isLoading prop is set to true. It will show the loading the loading spinner.

🧁 We have a method that emits a click event.