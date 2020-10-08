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

In this part we will create our forms for our mutation. Create a file called `CustomerDetailsTab.vue` in the `Booking` directory:

```javascript
<template>
  <div class="flex flex-col p-20 ">
    <div class="mt-5">
      <BodyOne>
        Booking date
      </BodyOne>
      <Input placeholder="date" type="date" v-model="personal.date" />
    </div>

    <div class="mt-5">
      <BodyOne> Email address </BodyOne>
      <Input
        placeholder="doku@corrisant.io"
        type="email"
        v-model="personal.email"
      />
    </div>
    <div class="flex lg:flex-row mt-5 s:flex-col">
      <RedBlockButton @click="$emit('goNext', 2)" class="mr-5 s:mb-5 lg:mb-0"
        >Proceed</RedBlockButton
      >

      <RedOutlineButton @click="$router.push('/')">Cancel</RedOutlineButton>
    </div>
  </div>
</template>
<script>
import Typography from "../../components/typography";
import Input from "../../components/inputs/Input";
import RedBlockButton from "../../components/buttons/RedBlockButton";
import RedOutlineButton from "../../components/buttons/RedOutlineButton";
const { BodyOne } = Typography;
export default {
  name: "CustomerDetailsTab",
  components: {
    RedBlockButton,
    RedOutlineButton,
    BodyOne,
    Input,
  },
  props: {
    personal: Object,
  },

  watch: {
    personal() {
      this.$emit("event", this.personal);
    },
  },
};
</script>

```

🪀 Here we are simply adding the date of the trip, number of people joining and the email address of the customer.

🪀 We also have props passed into the component for users personal information.

🪀 A watcher allows us run functions based on changes to certain data. With our watcher we are emiting an event so that the root component can store it for us.

Next lets add the form to add many customers, create `Customers.vue` file with the following:

```javascript
<template>
  <div class="flex flex-col p-20 ">
    <HeadingOne>
      Who are you travelling with?
    </HeadingOne>
    <div
      class="flex lg:flex-row s:flex-col mt-10"
      v-for="(customer, i) in customers"
      :key="i"
    >
      <hr />
      <div class="flex flex-col mr-5">
        <BodyOne> customer name </BodyOne>
        <Input
          placeholder="doku@corrisant.io"
          type="email"
          v-model="customer.name"
        />
        <BodyOne> customer country </BodyOne>
        <Input
          placeholder="doku@corrisant.io"
          type="email"
          v-model="customer.country"
        />
        <BodyOne> Physio score </BodyOne>
        <Input
          placeholder="doku@corrisant.io"
          type="email"
          v-model="customer.physioScore"
        />
      </div>
      <div class="flex flex-col">
        <BodyOne> Customer surname </BodyOne>
        <Input
          placeholder="doku@corrisant.io"
          type="email"
          v-model="customer.surname"
        />
        <label> </label>
        <input />
        <BodyOne> Passport number </BodyOne>
        <Input
          placeholder="doku@corrisant.io"
          type="email"
          v-model="customer.passportNumber"
        />
        <RemoveButton @click="removeCustomer(i)" />
      </div>
    </div>
    <div class="mt-5 ">
      <BlueBlockButton @click="addCustomer">Add a customer</BlueBlockButton>
    </div>
    <div class="flex lg:flex-row mt-5 s:flex-col">
      <RedBlockButton @click="$emit('goNext', 3)" class="mr-5 s:mb-5 lg:mb-0"
        >Proceed</RedBlockButton
      >

      <RedOutlineButton @click="$emit('goNext', 1)">Back</RedOutlineButton>
    </div>
  </div>
</template>
<script>
import Typography from "../../components/typography";
import Input from "../../components/inputs/Input";
import RedBlockButton from "../../components/buttons/RedBlockButton";
import RedOutlineButton from "../../components/buttons/RedOutlineButton";
import RemoveButton from "../../components/buttons/RemoveButton";
import BlueBlockButton from "../../components/buttons/BlueBlockButton";

const { HeadingOne, BodyOne } = Typography;
export default {
  name: "CustomerTab",
  components: {
    HeadingOne,
    RedBlockButton,
    RedOutlineButton,
    BodyOne,
    Input,
    RemoveButton,
    BlueBlockButton,
  },
  props: {
    customers: Array,
  },
  methods: {
    addCustomer() {
      // const o = [...this.customers];
      this.customers.push({
        name: null,
        surname: null,
      });
      // this.customers.push({ o });
      // console.log(this.customers);
    },
    removeCustomer(i) {
      this.customers.splice(i, 1);
    },
    submit() {
      this.$emit("inputData");
    },
  },
  watch: {
    name() {
      this.$emit("event", this.customers);
    },
  },
};
</script>

```

🪀 Here we are making an array to allow the user to add multplie customers with our `addCustomer()` method. We also have a `removeCustomer()` method in case the user wants to remove that user from the array.

🪀 The `name()` watcher emits the customer data to the root component.

🪀 We have a `div` that loops over the `customers` array and assigns each property in the array to a `v-model` instance on the relevant component.

Next we will add the third form in third tab to execute the mutation, create a file called `CheckoutTab.vue`:

```javascript
 <template>
  <div class="flex flex-col p-20 ">
    <HeadingOne>
      Your trip total
    </HeadingOne>
    <BodyOne>
      Test using this credit card: 4242 4242 4242 4242, and enter any 5 digits
      for the zip code</BodyOne
    >
    <card
      class="stripe-card mt-20 w-full"
      id="card"
      :class="{ complete }"
      stripe="{{stripe}}"
      :options="stripeOptions"
    />
    <BodyOne v-if="errors"> {{ showErrorMessage }}</BodyOne>
    <BodyOne v-if="loading"> Busy booking your trip</BodyOne>
    <div class="flex flex-row mt-20">
      <RedBlockButton
        @click="
          pay();
          submitBooking();
        "
        class="mr-5"
        >Pay</RedBlockButton
      >
      <RedOutlineButton @click="$emit('goNext', 2)">Back</RedOutlineButton>
    </div>
  </div>
</template>

<script>
import Typography from "../../components/typography/";
import RedBlockButton from "../../components/buttons/RedBlockButton";
import RedOutlineButton from "../../components/buttons/RedOutlineButton";
import { Card, createToken } from "vue-stripe-elements-plus";
const { HeadingOne, BodyOne } = Typography;
export default {
  name: "CheckoutTab",
  components: {
    HeadingOne,
    RedBlockButton,
    RedOutlineButton,
    BodyOne,
    Card,
  },
  data() {
    return {
      stripe: process.env.VUE_APP_STRIPE,
    };
  },
  props: {
    errors: Boolean,
    loading: Boolean,
    showErrorMessage: String,
  },
  methods: {
    submitBooking() {
      this.$emit("makeBooking");
    },
    pay() {
      createToken().then((data) => console.log(data.token));
    },
  },
};
</script>
<style>
.stripe-card {
  margin-top: 10px;
  border: 1px solid #ccc;
  padding: 5px 10px;
  box-shadow: 0px 1px 3px rgba(230, 235, 241, 0.25);
  border-radius: 4px;
}
.stripe-card.complete {
  border-color: green;
}
</style>

```

🪀 Here we are simply using the Stripe vue library to allow the user to enter their card. We are also conditionally rendering content if there is an error or the mutation is in a loading state.

Create a `.env` file in the root of the project and add your Stripe key:

```bash
VUE_APP_STRIPE=pk_test_your_strip_key

```

Make sure you add to also add the Stripe package:

```bash
$ yarn add vue-stripe-elements-plus
```

Lastly create final tab called `SuccessTab.vue`:

```javascript
<template>
  <div class="flex flex-col p-20 ">
    <HeadingOne>
      Thanks for booking with us
    </HeadingOne>
    <img src="../../assets/Vector.svg" class="mt-5" />
    <BodyOne class="mt-5"
      >Your link to your ticket is in the mail. Keep it safe and we will see you
      soon on {{ bookingData.bookingDate }}</BodyOne
    >
    <div>
      <img src="../../assets/confirmation_number.svg" />
      <a class="text-yellow font-display" :href="bookingData.chargeReciept"
        >Tickets</a
      >
    </div>
    <div class="flex flex-row ml-32 mt-20">
      <RedBlockButton @click="$router.push('/')" class="mr-5"
        >Book more</RedBlockButton
      >
    </div>
  </div>
</template>
<script>
import Typography from "../../components/typography";
import RedBlockButton from "../../components/buttons/RedBlockButton";
const { HeadingOne, BodyOne } = Typography;

export default {
  name: "SuccessTab",
  components: {
    HeadingOne,
    RedBlockButton,
    BodyOne,
  },
  props: {
    bookingData: Object,
  },
};
</script>

```

Next up we will finally execute the mutation.
