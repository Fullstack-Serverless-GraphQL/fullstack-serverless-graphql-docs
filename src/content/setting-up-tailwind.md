---
path: /setting-up-tailwind
title: Setting Up Tailwind
tag: frontend
date: 2020-07-16T17:56:10.926Z
part: frontend
postnumber: 34
framework: react
chapter: Tailwind
---

Tailwind CSS is a utility first library for styling HTML. It is not library with components like Ant Design, Bulma etc. You still need to create those components yourself, however , it gives you a better developer experience for styling your HTML so that you can get a custom feel to your designs, without the headache of overriding styles.

Since all the necessary installation steps are done via the React Bleeding Edge Kit, all we need to do is replace the default `tailwind.config.js` file with the one that will mirror the design system for the Lunar Tour on [Figma](https://www.figma.com/file/wfTuuiWP4TwRRsdcefLp4x/Lunar-Tour-App-v2?node-id=0%3A1).

Here is a link to the [file](https://raw.githubusercontent.com/Fullstack-Serverless-GraphQL/lunar-tour-frontend/master/tailwind.config.js), copy its contents and replace it with the contents of the `tailwind.config.js` in the root of the project.

Pretty simple task. Now we can start creating the UI components.
