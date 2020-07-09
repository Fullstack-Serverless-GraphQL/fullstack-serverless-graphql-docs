---
path: /create-booking-forms
title: Create Booking Forms
tag: frontend
date: 2020-05-25T18:30:38.589Z
part: frontend
chapter: Make A Booking
postnumber: 34
framework: vue
---

In this part we will create our forms for our mutation.

First import the following files:

```javascript
import BodyOne from "../../components/typography/BodyOne"
import DateInput from "../../components/inputs/DateInput"
import Input from "../../components/inputs/Input"

components: {
  BodyOne, DateInput, Input
}
```

Then make sure your data model looks like the following:

```javascript
 data() {
    return {
      activeKey: "1",
      email: "",
      number: "",
      date: "",
      customers: [],
    };
  },
```

Now add the following to the first tab:

```html
<div class="mt-5">
  <BodyOne>
    Booking date
  </BodyOne>
  <DateInput placeholder="date" type="date" v-model="date" />
</div>

<div class="mt-5">
  <BodyOne>
    Number of people
  </BodyOne>
  <input placeholder="3" type="number" v-model="number" />
</div>

<div class="mt-5">
  <BodyOne> Email address </BodyOne>
  <input placeholder="doku@corrisant.io" type="email" v-model="email" />
</div>
```

Here we are simply adding the date of the trip, number of people joining and the email address of the customer.

Next lets add the form to add many customers

```html
<div
  class="flex lg:flex-row s:flex-col mt-10"
  v-for="(customer, i) in customers"
  :key="i"
>
  <hr />
  <div class="flex flex-col mr-5">
    <BodyOne> customer name </BodyOne>

    <input
      placeholder="doku@corrisant.io"
      type="email"
      v-model="customer.name"
    />

    <BodyOne> customer country </BodyOne>

    <input
      placeholder="doku@corrisant.io"
      type="email"
      v-model="customer.country"
    />

    <BodyOne> Physio score </BodyOne>

    <input
      placeholder="doku@corrisant.io"
      type="email"
      v-model="customer.physioScore"
    />
  </div>

  <div class="flex flex-col">
    <BodyOne> Customer surname </BodyOne>

    <input
      placeholder="doku@corrisant.io"
      type="email"
      v-model="customer.Surname"
    />
    <label> </label>
    <input />

    <BodyOne> Passport number </BodyOne>

    <input
      placeholder="doku@corrisant.io"
      type="email"
      v-model="customer.passportNumber"
    />
    <RemoveButton @click="removeCustomer(i)" />
  </div>
</div>
```

Here we are making an array to allow the user to add multplie customers. Make sure you import the Remove button:

```javascript
import RemoveButton from "../../components/buttons/RemoveButton"

components: {
  RemoveButton
}
```

Next we will add the third form in third tab to execute the mutation:

```
 <BodyOne>
                Test using this credit card: 4242 4242 4242 4242, and enter any
                5 digits for the zip code</BodyOne
              >

              <card
                class="stripe-card mt-20 w-full"
                id="card"
                :class="{ complete }"
                stripe="pk_test_5ThYi0UvX3xwoNdgxxxTxxrG"
                :options="stripeOptions"
              />

              <BodyOne v-if="error"> {{ error }}</BodyOne>

              <BodyOne v-if="loading"> Busy booking your trip</BodyOne>

```

Here we are simply using the stripe vue librarry to allow the user to enter their card. We are also conditionally rendering stuff which will come into play when we render the mutation.

Make sure you add the package:

```
$ yarn add vue-stripe-elements-plus
```

then import it:

```
import { Card, createToken } from "vue-stripe-elements-plus";

 components: {
    Card,
  }
```

Lastly in the final tab addd an image and some text to thank the customer post the mutation:

```javascript
 <img src="../../assets/Vector.svg" class="mt-5" />
              <BodyOne class="mt-5"
                >Your link to your ticket is in the mail. Keep it safe and we
                will see you soon</BodyOne
              >
```

Next up we will finally execute the mutation.
