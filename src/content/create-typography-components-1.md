---
path: /create-typography-components-react
title: Create Typography Components
tag: frontend
date: 2020-07-16T18:18:08.729Z
part: frontend
postnumber: 37
framework: react
chapter: Building reusable components
---
In this post we will create a couple of typography components that we will use throughout the App for all of our Typography.

First create a folder in the components directory called `typography`. And create a file called `HeadingOne.js` and add the following:



```javascript
import React from "react";
import PropTypes from "prop-types";
const HeadingOne = ({ className, children }) => {
  return (
    <h1 className={`${className} text-4xl text-black text-bold font-display`}>
      {children}
    </h1>
  );
};

HeadingOne.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

HeadingOne.defaultProps = {
  className: "",
};
export default HeadingOne;


```

🛩️ We are creating a H1 component that will allow us to add additional content inside it via the children prop.

🛩️ Then we given it some styles.

Then next up create a HeadingTwo.js file with the following:



```javascript
import React from "react";
import PropTypes from "prop-types";
const HeadingTwo = ({ className, children }) => {
  return (
    <h1 className={`${className} text-xl text-black text-bold font-display`}>
      {children}
    </h1>
  );
};

HeadingTwo.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

HeadingTwo.defaultProps = {
  className: "",
};
export default HeadingTwo;


```

Then create a HeadingThree.js component with the following:



```javascript
import React from "react";
import PropTypes from "prop-types";
const HeadingThree = ({ className, children }) => {
  return (
    <h1 className={`${className} text-2xl text-black text-bold font-display`}>
      {children}
    </h1>
  );
};

HeadingThree.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

HeadingThree.defaultProps = {
  className: "",
};
export default HeadingThree;


```

Next up create a BodyOne.js file and add the following:



```javascript
import React from "react";
import PropTypes from "prop-types";
const BodyOne = ({ className, children }) => {
  return (
    <p className={`${className} text-sm text-black text-bold font-display`}>
      {children}
    </p>
  );
};

BodyOne.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

BodyOne.defaultProps = {
  className: "",
};
export default BodyOne;


```



Last lets create an `index.js` file so we can import the components in one line through out the app:

```javascript
import HeadingOne from "./HeadingOne";
import BodyOne from "./BodyOne";
import HeadingTwo from "./HeadingTwo";
import HeadingThree from "./HeadingThree";

export { HeadingOne, BodyOne, HeadingTwo, HeadingThree };

```