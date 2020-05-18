---
path: /creating-frontend-repo
title: Creating the Frontend Repo with Vue CLI
tag: frontend
date: 2020-05-18T18:06:34.032Z
part: Setup frontend
chapter: Vue cli
---
In this section we will start building out the frontend of the Lunar Tour app. First we will need to create the repo on Github.



First go to Github and create new repo:

\[Add screen where you create repo]



Now that we have it created. We need to install the Vue CLI. It will allow us to scaffold the project. In your terminal run the following:

```
$ yarn global add @vue/cli

```



Once it is installed run the following:

```
$ vue create lunar-tour-frontend
```



Select the default option:

\[screenshot]



Select the Babel, Router & Linter options.

\[screenshot]

Sit back and let the CLI do the work:

\[Screenshot]



Now change into the directory and start the app:

```
$ yarn serve
```

If you go to localhost:8080 your app should be visible.



Now we need to commit this to our repo. Initialize the local directory as a Git repository:

```
$ git init

```

Add the files in your new local repository. This stages them for the first commit:

```
$ git add .

```

Commit the files that you've staged in your local repository:

```
$ git add .
```

In Terminal,[add the URL for the remote repository](https://help.github.com/en/articles/adding-a-remote) where your local repository will be pushed:

```
$ git remote add origin remote repository URL
# Sets the new remote

$ git remote -v
# Verifies the new remote URL
```



[Push the changes](https://help.github.com/en/articles/pushing-commits-to-a-remote-repository)in your local repository to GitHub:

```
$ git push -u origin master

```



Now all our code is synced with Github.