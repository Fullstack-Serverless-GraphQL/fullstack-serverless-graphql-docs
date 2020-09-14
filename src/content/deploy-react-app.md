---
path: /deploy-react-app
title: Deploy React App to Netlify
tag: frontend
date: 2020-09-14T19:02:08.429Z
part: frontend
postnumber: 53
framework: react
chapter: Deploy Frontend
---

In this final chapter we will we deploy our frontend to Netlify. Firstly, let's explore why Netlify?

Variety is the spice of life and when it comes to deploying a React, you have tonnes of variety. However, I'm yet to find few that gives you a simple process to deploy your site than others.

The things that stand out for me using Netlify:

🦚 The ability to get deploy previews from a specific branch. Very useful if you're trying to test something specfic and want to test it in a somewhat live environment, you can just create a PR and deploy that branch in isolation.

🦚 Unlimted sites can be deployed for free, which makes its affordable for everybody.

First thing you got to do is head over to [Netlify](https://netlify.com/) and login or if you have not created an account simply sign up.

Once you've done that you should see all or your sites. Click the "add site" button so we can start the process of adding our site:

![step-1](/uploads/net_r_1.png)

Now we come to the screen where it gives options to select our Git provider:

![step-2](/uploads/net_r_2.png)

Please select your prefered Git provider.

Once you've selected your provider you should be able to select the repo you want to deploy, in my case I'm deploy a repo from an a organistation:

![step-3](/uploads/net_r_3.png)

Next up, our deploy settings will display. In our case the template we used to build our project came with a Netlify.toml file that has build commands for us. So all the fields are prepopulated for us. If you're techincally advanced enough you are most welcome to tinker around:

![step-4](/uploads/net_r_4.png)
