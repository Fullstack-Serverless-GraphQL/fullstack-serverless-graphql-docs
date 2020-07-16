---
path: /create-nav-and-header-react
title: Create Nav and Header
tag: frontend
date: 2020-07-16T18:12:57.222Z
part: frontend
postnumber: 36
framework: react
chapter: Building reusable components
---
In this post we will create a Navigation bar and a Header component for our landing page.

Go head and create a navs folder and create a Nav.js file with the following:

```javascript
import React from "react";

const Nav = () => (
  <nav className="nav border-top flex items-center justify-between flex-wrap bg-transparent p-55 z-100">
    <div className="flex items-center flex-no-shrink text">
      <h1 className="font-display text-red text-2xl">
        <a className="no-underline text-red" href="/">
          Lunar
        </a>
      </h1>
    </div>
  </nav>
);

export default Nav;

```

🌞 We have an HTML Nav bar that is is responsive and allows the user to redirect to the Home page of the site.

Next up create a headers folder and create a file called LandingHeader.js with the following contents:



```javascript
import React from "react";

const LandingHeader = ({ imgURL, text = "" }) => {
  return (
    <>
      <div
        class=" text-center bg-transparent "
        style={{
          background: `url(${imgURL})no-repeat center center`,
          backgroundSize: "cover",
          height: "570px",
          marginTop: "-85px",
        }}
      >
        <h1 class="text-white font-display text-5xl pt-44 s:text-4xl">
          {text}
        </h1>
      </div>
    </>
  );
};

export default LandingHeader;

```

🌞In this div have a v-if statement that accepts text to be displayed

🌞 There is also a computed style prop that accepts an image url that will display a picture in the background based on the image URL.

🌞Then we have Vanilla CSS styles for this component as you are unable to replicate this in TailwindCSS.