---
path: /unit-testing-mutations
title: Unit Testing Mutations
tag: "backend "
date: 2020-05-17T19:50:01.039Z
part: Building backend
chapter: Unit testing
postnumber: 19
---

In this setion we will unit test our mutation.

In the tests folder, create a makeABooking.test.js file and add the following:

```javascript
import { makeABooking } from "../src/resolvers/mutation";


describe("Make a booking", () => {
  test("Successfully able to make a booking", async () => {
    const args = {
      listingId: "a114dded-ddef-4052-a106-bb18b94e6b51",
      bookingDate: "24-Apr-20",
      size: 2,
      customerEmail: "angela@dundler.com",
      customers: [
        {
          name: "Dwight",
          surname: "Shrut",
          passportNumber: "3333344",
          physioScore: "454",
        },
        {
          name: "Pam",
          surname: "Papper",
          passportNumber: "34354",
          physioScore: "2945",
        },
      ],
    };

    const context = "context";

    const response = await makeABooking(args, context);

    console.log(response);
  });

  }
```

💣 We are creating mutation in the args with the necessary data.

💣 Next we are making sure we get back a bookingId that the charge matches what we expect it to be.

Then go to your terminal and run the test:

```
$ yarn test makeABooking.test.js
```

Now all our tests are passing!
