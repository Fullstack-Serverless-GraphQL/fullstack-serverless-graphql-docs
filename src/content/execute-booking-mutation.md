---
path: /execute-booking-mutation
title: Execute Booking Mutation
tag: frontend
date: 2020-05-25T18:45:15.662Z
part: frontend
chapter: Make A Booking
---
In this part we will finilize the mutation. 

So we will use the Apollo Mutation component to execute the mutation. Make sure your file looks like this:



```
<template>
  <div>
    <!-- mutation --->
    <ApolloMutation
      :mutation="require('../../graphql/makeABooking.gql')"
      :variables="{
        size: parseInt(number),
        customerEmail: email,
        bookingDate: date,
        listingId: this.$route.params.id,
        customers: customers,
      }"
      @done="onDone"
    >
      <template v-slot="{ mutate, loading, error }">
        <!-- TAB ONE --->

        <a-tabs v-model="activeKey">
          <a-tab-pane tab="Tab 1" key="1" class="flex justify-center">
            <div class="flex flex-col p-20 ">
              <HeadingOne>
                Booking for Listing Name
              </HeadingOne>
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
                <Input placeholder="3" type="number" v-model="number" />
              </div>

              <div class="mt-5">
                <BodyOne> Email address </BodyOne>
                <Input
                  placeholder="doku@corrisant.io"
                  type="email"
                  v-model="email"
                />
              </div>
              <div class="flex lg:flex-row mt-5 s:flex-col">
                <RedBlockButton
                  @click="next(2)"
                  text="Proceed"
                  class="mr-5 s:mb-5 lg:mb-0"
                />
                <RedOutlineButton @click="$router.push('/')" text="Cancel" />
              </div>
            </div>
          </a-tab-pane>

          <!-- TAB ONE  END--->

          <!-- TAB TWO --->

          <a-tab-pane tab="Tab 2" key="2" class="flex justify-center">
            <div class="flex flex-col p-20 ">
              <HeadingOne>
                Who are you travelling with?Who are you travelling with?
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
                    v-model="customer.Surname"
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
                <BlueBlockButton text="Add a customer" @click="addCustomer" />
              </div>
              <div class="flex lg:flex-row mt-5 s:flex-col">
                <RedBlockButton
                  @click="next(3)"
                  text="Proceed"
                  class="mr-5 s:mb-5  lg:mb-0"
                />
                <RedOutlineButton @click="next(1)" text="Back" />
              </div>
            </div>
          </a-tab-pane>
          <!-- TAB TWO  END--->
          <!-- TAB THREE --->

          <a-tab-pane
            tab="Tab 3"
            key="3"
            class="text-black flex justify-center"
          >
            <div class="flex flex-col p-20 ">
              <HeadingOne>
                Your trip total
              </HeadingOne>

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

              <div class="flex flex-row mt-20">
                <RedBlockButton
                  @click="
                    pay();
                    mutate();
                  "
                  text="Pay"
                  class="mr-5"
                />
                <RedOutlineButton @click="next(2)" text="Back" />
              </div>
            </div>
          </a-tab-pane>
          <!-- TAB THREE END--->
          <!-- TAB FOUR --->

          <a-tab-pane
            tab="Tab 4"
            key="4"
            class="text-black flex justify-center"
          >
            <div class="flex flex-col p-20 ">
              <HeadingOne>
                Thanks for booking with us
              </HeadingOne>
              <img src="../../assets/Vector.svg" class="mt-5" />
              <BodyOne class="mt-5"
                >Your link to your ticket is in the mail. Keep it safe and we
                will see you soon</BodyOne
              >

              <div class="flex flex-row ml-32 mt-20">
                <RedBlockButton
                  @click="$router.push('/')"
                  text="Book more"
                  class="mr-5"
                />
              </div>
            </div>
          </a-tab-pane>
          <!-- TAB FOUR END--->
        </a-tabs>
      </template>
    </ApolloMutation>
  </div>
</template>

<script>
import HeadingOne from "../../components/typography/HeadingOne";
import BodyOne from "../../components/typography/BodyOne";
import DateInput from "../../components/inputs/DateInput";
import Input from "../../components/inputs/Input";
import RedBlockButton from "../../components/buttons/RedBlockButton";
import RedOutlineButton from "../../components/buttons/RedOutlineButton";
import RemoveButton from "../../components/buttons/RemoveButton";
import BlueBlockButton from "../../components/buttons/BlueBlockButton";
import { Card, createToken } from "vue-stripe-elements-plus";

export default {
  name: "Index",
  components: {
    HeadingOne,
    BodyOne,
    DateInput,
    Input,
    RedBlockButton,
    RedOutlineButton,
    RemoveButton,
    BlueBlockButton,
    Card,
  },
  data() {
    return {
      activeKey: "1",
      email: "",
      number: "",
      date: "",
      customers: [],
    };
  },
  methods: {
    onDone() {
      this.activeKey = "4";
    },
    next(k) {
      this.activeKey = k.toString();
    },
    addCustomer() {
      // const o = [...this.customers];
      this.customers.push({
        name: null,
        Surname: null,
      });

      // this.customers.push({ o });
      // console.log(this.customers);
      //Failed to persist entry: TypeError: Cannot read property 'expires_at' of null
    },

    removeCustomer(i) {
      this.customers.splice(i, 1);
    },
    submitForm() {
      console.log(this.date);
      alert(
        `${this.customers[0].customerName}, ${this.email}, ${this.number}, ${this.date}`
      );
    },
    pay() {
      createToken().then((data) => console.log(data.token));
    },
  },
};
</script>
<style>
.ant-tabs-bar.ant-tabs-top-bar {
  display: none;
}

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

♻️ We pase in the schema document and the variables necessasry for the mutation. As well as execute an OnDone function which will allow the user to go to the next tab post mutation.

♻️ We have a slot that as the variables that are similar to the query ones

♻️ In the third tab we have error states and loading states

♻️ In the red button the pay and mutate functions will hit stripe and execute the mutation



Thats it! You have a working GraphQL FULLSTACK APP