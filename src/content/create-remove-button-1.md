---
path: /create-remove-button-react
title: Create Remove Button
tag: frontend
date: 2020-07-16T18:41:11.878Z
part: frontend
postnumber: 41
framework: react
chapter: Building reusable components
---
In this chapter we will build out our components that we will be using through out the application. First lets go ahead and create a Remove button.

In the components folder create a folder called buttons. Then create a RemoveButton.vue component and add the following:



```javascript
import React from "react";
import PropTypes from "prop-types";
import remove from "../../assets/remove.svg";

const RemoveButton = ({
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
      className={`${className} bg-white cursor-pointer text-red-darkest focus:outline-none font-display  px-16 py-2 cursor:pointer`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <div className="flex flex-row">
        <img src={remove} alt="remove" />
        <p className="text-sm font-display text-bold ml-3 mt-3">Remove</p>
      </div>
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
RemoveButton.propTypes = propTypes;
export default RemoveButton;

```

🧁In the template part we have a button with a handle click event.

🧁 with a v-if statement that is triggered if the isLoading prop is set to true. It will show the loading the loading spinner.

🧁 We have a method that emits a click event.