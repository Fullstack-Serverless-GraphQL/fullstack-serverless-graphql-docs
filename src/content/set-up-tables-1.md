---
path: /set-up-tables
title: Set up tables
tag: backend
date: 2020-04-21T16:45:08.244Z
part: setting up backend
chapter: Setting Up infrastructure
---
In this section we are going to create our DynamoDB tables. DynamoDB is a NoSQL key-value store serverless native database. Sounds like a mouthful, in a nutshell it does not force your data to adhere to any data model and you do not have to provision any server instances for it to run. 

The way we will be provisioning our tables will enable us to create tables for any of our environment stages. 

Create a folder called \`resources\` and create a file called \`listing-db.yml\`. Paste the following inside:

```YAML
Resources:
 ListingsDB:
    Type: AWS::DynamoDB::Table
    Properties:
      TableName: ${self:custom.ListingsDB}
      AttributeDefinitions:
        - AttributeName: listingId
          AttributeType: S
        - AttributeName: listingName
          AttributeType: S

        
      KeySchema:
        - AttributeName: listingId
          KeyType: HASH
        - AttributeName: listingName
          KeyType: RANGE
      # Set the capacity based on the stage
      ProvisionedThroughput:
        ReadCapacityUnits: ${self:custom.tableThroughput}
        WriteCapacityUnits: ${self:custom.tableThroughput}
```

### What is happening?

🎩 We are creating table with a Primary Key called \`listingId\` and a Sort Key called \`listingName\` both of them are strings.

🎩  Specify what the Read/Write Units should be. \
\
\
In the same directory lets create the table that will store our bookings called \`booking-db.yml\`:

```
Resources:
 BookingsDB:
    Type: AWS::DynamoDB::Table
    Properties:
      TableName: ${self:custom.BookingsDB}
      AttributeDefinitions:
        - AttributeName: bookingId
          AttributeType: S
        - AttributeName: listingId
          AttributeType: S
  
        
      KeySchema:
        - AttributeName: bookingId
          KeyType: HASH
        - AttributeName: listingId
          KeyType: RANGE
      # Set the capacity based on the stage
      ProvisionedThroughput:
        ReadCapacityUnits: ${self:custom.tableThroughput}
        WriteCapacityUnits: ${self:custom.tableThroughput}
```

We are doing the same thing here only difference is that we made the Sort Key the \`listingId\`. 

Now we need to reference it in our \`serverless.yml\`:

```
resources:
  - ${file(resources/listing-db.yml)}
  - ${file(resources/bookingDB.yml)}
```

In the samee file we need to create those tables in the custom section of the file:

```
custom:
  stage: ${opt:stage, self:provider.stage}
  region: ${opt:region, self:provider.region}
  ListingsDB: ${self:custom.stage}-listings
  BookingsDB: ${self:custom.stage}-bookings
```

As we well as create them as environment variables:



```
provider:
  name: aws
  runtime: nodejs10.x
  stage: dev
  region: us-east-1
  profile: personalAccount
  environment:
    BookingsDB: ${self:custom.BookingsDB}
    ListingsDB: ${self:custom.ListingsDB}
```



Now we have created our infrastructure for the tables as code. 🗽