---
path: /deploy-backend-code
title: Deploy Backend Code
tag: 'backend '
date: 2020-05-17T19:55:21.315Z
part: Building backend
chapter: 'Deploy Backend '
---
In this part we will deploy our backend.



So make sure you commit all your code. I use Visual Studio code, so I do the following:



Write a commit message: 

![](/uploads/screenshot-2020-05-17-at-21.57.43.png)

Then I click the tab next to the branch name to commit the code into master:

![](/uploads/screenshot-2020-05-17-at-21.58.50.png)

Next go into the Seed Console. You should see the build being triggered and in progress:

![](/uploads/screenshot-2020-05-17-at-22.00.19.png)



Then if you open up the build logs you should see your Endpoint: 

![](/uploads/screenshot-2020-05-17-at-22.01.44.png)

If you navigate to the Endpoints you should be able execute queries and mutations:

![](/uploads/screenshot-2020-05-17-at-22.03.11.png)



Congrats! We now have a working GraphQL API!