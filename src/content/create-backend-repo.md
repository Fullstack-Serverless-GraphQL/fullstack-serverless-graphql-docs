---
path: /create-backend-repo
title: Create Backend Repo
tag: backend
date: 2020-04-21T00:00:00.000Z
part: setting up backend
chapter: creating repo
---

In this part we will initialise the backend repo and get everything setup

\## Create a repo on Github

head over to Github and click on create repo

\[add image]

then create an empty repo and call it lunar-tour-api, and leave the other fields blank.

\[add image]

Now we need to clone the a servless-graphQL starter, so open your terminal and type in the following:

```bash
$ serverless install --url https://github.com/pimp-my-book/serverless-graphql-nodejs-starter --name lunar-tour-api
```

now we need to send the code up to GitHub:

go into the directory of the repo:

```bash
$ cd lunar-tour-api
```

Initialise git:

```bash
$ git init
```

Add all the files

```bash
$ git add .
```

Create a commit message:

```bash
$ git commit -m "initial commit"
```

Add the remote URL:

```bash
$ git remote add origin https://github.com/name-of-repo.git
```

Push all your changes:

```bash
git push -u origin master

```

Awesome, yoour repo should be full of code now on GitHub!
