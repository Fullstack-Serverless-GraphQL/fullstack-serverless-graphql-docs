---
path: /a-case-for-graphql
title: A Case For Graphql
tag: Epilouge
date: 2020-04-13T00:00:00.000Z
part: Epilouge
chapter: "Epilouge"
postnumber: 2
---

GraphQL is a query language for your API that allows you to specify exactly in what shape and form you want your data to be queried or mutated on your API. GraphQL has nothing to do with your database schema nor does it forces you to use a graph database.

## What problem does GraphQL solve ?

GraphQL prevents you from developing multiple endpoints to collect data. Let us say you had an API that does operations on Stocks, Companies & Currencies. You would have had to make the following endpoints in the backend:

get all stocks

```
/stocks
```

to get a stock

```
/stocks/{stock_id}
```

get a company

```
/companies/{company_id}
```

I think you get the pattern. whereas with GraphQL our endpoint could be : `/graphql`

with the following schema:

```graphql
type Company {
  ID: Int!
  name: String
}

type Stock {
  ID: Int!
  name: String
  comapany: [Company]
}

type Query {
  getStocksAndCompanies(ID: Int): [Stock]
}
```

now to query the data using GraphQL you can simply do this:

```graphql
{
  getStocksAndCompanies(ID: 2) {
    ID
    name
    company {
      name
    }
  }
}
```

Which will get all the companies associated with that stock for you.

## What are the advantages of using GraphQL?

GraphQL has a better developer experience because once you create the schema on the back-end, a front-end developer can easily see the schema and understand how they need to structure their tasks on the front-end to access specific data. A GraphQL API is self-documenting.

Server-side graphQL libraries come with Playground or GraphQil for you to test your API, so no more fiddling with Postman.

GraphQL also comes with subscriptions which are real connections to the server for use cases like messaging, notifications etc. All without using other libraries for this use case.
