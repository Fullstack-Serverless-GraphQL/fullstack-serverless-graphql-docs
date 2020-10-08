---
path: /setting-up-advanced-forms
title: Setting Up Advanced Forms
tag: frontend
date: 2020-07-21T18:47:58.754Z
part: frontend
postnumber: 45
framework: react
chapter: Make A Booking Mutation
---

Genereally there comes a time when you've got do things in an advanced way in order to write maintainable code that won't compromise the developer experince. Customer experince tends to be loosely coupled to the developer experince. If things are a pain to maintain, the harder it will be to deliver value to your customers.

So the way the mutation needs to be executed is in a multistep form that needs to be in separte components. The key driver for this is so that the user does not need to do everything on one page. This would be a poor user experince. Also you need to maintain a file that would easliy be 400+ lines of code.

Our approach will be the following:

☎️ Use [Ant design's](https://ant.design/) tabs and target the CSS classes to hide the controls

☎️ Use [Apollo client's](https://www.apollographql.com/docs/react/v2.6/data/local-state/) Cache as a central state store to persist the data between the components and use it to trigger our mutation in the penulatmate mutation.
