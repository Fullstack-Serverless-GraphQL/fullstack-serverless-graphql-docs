---
path: /set-up-tables
title: Set up tables
tag: backend
date: 2020-04-21T16:45:08.244Z
part: setting up backend
chapter: creating repo
---
We will now cover how to setup DynamoDB resources.

Why are we using Dynamo?

It is a serverless native database that fits in well with a Serverless stack, if we were to use a SQL database or something like Mongo we would be charged for the time our instances are being run. However, AWS does have a serverless relation database.

create a folder in the root of the app called resources.

then make a file called listing-db.yml

copy the following code :

\[add listing db code]

this is the listing database that we will use to store all our listings. it has a primary key called listingId and a sort key called listingName. We have also a section that allows us to set the Provisioned Throughput for our read/write units.



Cool, now we want to do the same for the bookings table. so create a file called booking-db, add the following card:



\[add booking db code]



now we need to go into our serverless.yml and refernce these tables, so under the custom section add the following:



\[add custom content]



then make the the tables avaialble in the environment like so :



now also add iam role statements that will give this function the ability to interact with Dynamo:



\[add role statements]



now at the bottom, link the resource files like so :



\[add resource file]



your serverless.yml should look like this now:



\[add serverless.yml at this poitn]