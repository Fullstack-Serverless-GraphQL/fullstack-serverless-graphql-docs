---
path: /setup-apollo-cache
title: Setup Apollo Cache
tag: frontend
date: 2020-07-21T19:02:08.429Z
part: frontend
postnumber: 46
framework: react
chapter: Make A Booking Mutation
---

In this post we setup the Apollo cache and our local resolvers to be able to store the form data.

First in your `index.js` file add the following:

```javascript
import { InMemoryCache } from "apollo-cache-inmemory"

const cache = new InMemoryCache()

cache.writeData({
  data: {
    formData: {
      date: "",
      email: "",
      customer: {},
      __typename: "formData",
    },
  },
})
```

🍗 Here we are simply importing the `InMemoryCache` function and then making an instance of a cache object.

🍗 Next we use the `writeData` function to create our initial `formData` object that has a date, email and customer fields to store that data.

🍗 Very important is the `__typename` field the lets GraphQL know that the `formData` object is the type we will be querying and mutating

Next up in `src` make a file called `resolvers.js` and add the following:

```javascript
import { GET_FORM_DATA } from "./graphql/Queries"

export const resolvers = {
  Mutation: {
    updateFormData: (parent, args, context, info) => {
      const queryResult = context.cache.readQuery({ query: GET_FORM_DATA })
      const { formData } = queryResult
      if (queryResult) {
        const data = {
          formData: {
            date: args.date,
            email: args.email,
            customer: args.customers,
            __typename: formData["__typename"],
          },
        }

        context.cache.writeQuery({ query: GET_FORM_DATA, data })
        return data.formData
      }
      return []
    },
  },
}
```

🍗 We have a resolvers object that has a mutation which has a function called `updateFormData`.

🍗 `updateFormData` reads the cache to get the most update version of the `formData`

🍗 Then it creates a new object that takes in new arguments to overwrite the form data with update data.

🍗 `formData` is then returned.

Next up go to the `Queries.js` file and add the following:

```javascript
export const GET_FORM_DATA = gql`
  query GET_FORM_DATA {
    formData @client {
      date
      email
    }
  }
`
```

We have to create a schema doc to read the `formData` the `@client` directive lets GraphQL know it is directly for the client only.

In the `mutations.js` add the following:

```javascript
import gql from "graphql-tag"

export const UPDATE_FORM_DATA = gql`
  mutation UPDATE_FORM_DATA(
    $date: String
    $email: String
    $customer: CustomerInput
  ) {
    updateFormData(date: $date, email: $email, customer: $customer) @client
  }
`
```

Here we are just creating a mutation to update the form data

This is it for now, next up we will start with building out the forms.
