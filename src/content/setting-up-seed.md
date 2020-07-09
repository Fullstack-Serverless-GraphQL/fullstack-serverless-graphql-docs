---
path: /set-up-seed
title: Setting Up Seed
tag: backend
date: 2020-05-08T15:48:00.385Z
part: setting up backend
chapter: Setting Up infrastructure
postNumber: 4
---

In this part we will set up Seed, which is our Continous Integration & deployment tool that will allow us to deploy our back-end whenever there is a change in the master branch of our repo and configure different stages. The reason why we are doing this so soon is that for our Apollo Server to work with Serverless Offline we need the Lambda and the other resources to be provisioned to work with GraphQL playground.

First, sign up for an account: \[add account sign up]

![](/uploads/1-seed.png)

Then click add an App

![](/uploads/2-seed.png)

Now connect to your favorite git provider

It should pick up our service manually.

Then you need to add your AWS credentials:

![](/uploads/3-seed.png)

Once that is done click add new app

Now we need to deploy, so click the arrow in the dev part if the pipeline and click deploy

![](/uploads/4-seed.png)

After a few minutes you should be able to see the new endpoints and tables we created. first click on the drop down:

![](/uploads/5-seed.png)

then click view resources:

![](/uploads/6-seed.png)

We will get back to how we can move stuff to prod later.
