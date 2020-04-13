---
path: /a-case-for-graphql
title: A Case For Graphql
tag: Epilouge
date: 2020-04-13T00:00:00.000Z
part: Epilouge
chapter: none
---

GraphQL is a query langauge for your API that allows to specifiy exactly in what shape and form you want your
data to be queried or mutated on your API. It has nothing to do with your database schema too nor forces you to use
a graph database.

## What problem does it solve??

It prevents you from devevloping mutliple endpoints to collect data. Lets say I had an API that
does operations on `Stocks, Companies & Currencies`. You have make the following endpoints in the backend:

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

I think you get the pattern. whereas with Graphql our endpoint could be : `/graphql`

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

now to query the data you can simply do this:

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

## How can it make me a better developer?

GraphQL has a better developer experince due to the fact that because I Made the schema on the backend, a frontend
developer can easilsy see the schema and understand how they need to structure their tasks on the frontend. A graphQL API
is self documenting.

Serverside graphQL libraries come with Playground or GraphQil for you to test your API, so no more fiddling with Postman.

GraphQL also comes with subscriptions which is basically realconnections to the server for use cases like messaging, notifications etc. All without using other libraries for this use case.

However, GraphQL does not shine in all scenarios, so it is important that you know of it's limitations for specifc use cases.
