---
path: /installing-tailwind
title: Installing Tailwind
tag: frontend
date: 2020-05-18T18:29:57.643Z
part: Setup frontend
chapter: Tailwind
postnumber: 22
framework: vue
---

We will be using Tailwind for our styling in the App. we just have to run through some installation steps to make sure it is up an running.

Lets go ahead and install the following:

```
$ yarn add tailwindcss
```

Then create a tailwind.config.js file in the root of your project and paste the following config in your file. This config will match the design system for the project that we are building fron. You can view it on Figma here.

Next lets go ahead and make a postcss.config.js file in the root of the app:

```javascript
module.exports = {
  plugins: [
    require("tailwindcss")("tailwind.config.js"),
    require("autoprefixer"),
  ],
}
```

Next up we need to configure our CSS file. In the assets folder create a folder called css and create tailwind.css file and copy the following:

```css
@tailwind base;

@tailwind components;

@tailwind utilities;
@import url("https://fonts.googleapis.com/css?family=Saira&display=swap");
```

Lastly import the css file in the main.js file:

```javascript
import "./assets/css/tailwind.css"
```

Now lets test that it is working:

\[add test code in App.vue]

Now the app is picking up our styles.
