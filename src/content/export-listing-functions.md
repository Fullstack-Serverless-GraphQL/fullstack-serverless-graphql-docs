---
path: /export-listings-functions
title: Export listing functions
tag: backend
date: 2020-05-13T18:16:54.234Z
part: Building backend
chapter: All listings query
---
Here we are just going to setup the function and export it so that Apollo Server can pick up the query.

First lets go into our query.js file and create the following function:



```
export const getAllListings = async (args, context) => {

return null
}
```



All we are doing here is creating an async function that accepts args and context as properties.

Next we are going to import this function from above into our index.js file:



```
import { getAllListings } from "./query";
export const resolvers = {
  Query: {
    getAllListings: (root, args, context) => getAllListings(args, context),
  }
 }
```

 We are creating a resolvers object that has a query property that returns our getAllListings function.



Next we can start writting the code to return data!