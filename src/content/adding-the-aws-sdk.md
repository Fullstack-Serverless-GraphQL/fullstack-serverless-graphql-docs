---
path: /adding-aws-sdk
title: Adding the AWS SDK
tag: backend
date: 2020-05-11T18:08:17.066Z
part: Building backend
chapter: Adding libraries
---
Here we will set up the AWS SDK to be able to interact with DynamoDDB.



First thing do yourself a have do the following in your terminal:



```
$ yarn add aws-sdk
```

Then go ahead and create a \`libs/\` directory in the root of the folder and create a file called \`dynamodb-lib.js\`. 

Lets now work on a wrapper around the \`AWS-SDK\` for Dynamo and add the following to \`dynamodb-lib.js\`: 



```
import AWS from "aws-sdk";

AWS.config.update({ region: 'us-east-1' })

export function call(action, params) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    return dynamoDb[action](params).promise();
}
```



The following is happening:

🎯 the call function has two parameters : action and params. Action will specifiy what type of DynamoDB operation is taking place, while params will be the data or expressions we are sending to Dynamo like whether to tell it to find something by a specific attribute etc.

🎯 Then we are return a promise with the action and params attached to our new instance of DynamoDB.

Next we will go ahead and populate Dynamo with our listings!