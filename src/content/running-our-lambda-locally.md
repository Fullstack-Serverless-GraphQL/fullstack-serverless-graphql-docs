---
path: /running-locally
title: Running our Lambda locally
tag: backend
date: 2020-05-11T17:46:40.265Z
part: Building backend
chapter: "Adding libraries "
postnumber: 8
---

Now we have successfully deployed our function that has a basic Hello World query. We will now go ahead and start testing out how to run it locally.

In your terminal run the following:

```bash
$ sls offline
```

This will run your Lambda on port`4000`. So in your browser if you go to `localhost:4000/graphql` you should see an instance of GraphQL Playground.

GraphQL Playground is where you can test your Queries/Mutations or Subscriptions for your GraphQL API and see the responses that come back from your server. Also it shows you the schema for your API, which makes it self documenting to a certain extent.

Now we can run the following query :

```json
{
  hello
}
```

It should return the following:

![](/uploads/hello-world-.png)

Now that is working! Let's continue to set up the other libraries we need.
