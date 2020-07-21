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
Genereally there comes a time when you've got doing things in an advanced way in order to write maintainable code that won't compromise the developer experince. Because if it is your customers suffer and people lose faith in what you're making.

So the way the mutation needs to be executed is in a multistep form that needs to be in separte components. The key driver for this is so that the user does not need to do everything on one page. This would be a poor user experince. Also you need to maintain a file that would easliy be 400+ lines of code.



Our approach will be the following:

\* use ant design's tabs and target the CSS classes to hide the controls

\* Use Apollo client's Cache as a central state store to persist the data between the components and use it to trigger our mutation in the penulatmate mutation.