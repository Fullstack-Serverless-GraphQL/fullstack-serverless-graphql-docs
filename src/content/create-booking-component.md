---
path: /create-booking-component
title: Create Booking Component
tag: frontend
date: 2020-05-25T18:28:58.214Z
part: frontend
chapter: Make A Booking
postnumber: 34
framework: vue
---

In this part we will create the booking component.

First head over and create a `booking` directory and create an `Index.vue` file with the following:

```
<template>
  <div>
    <HeadingOne class="text-center">
      Booking for {{ getAListing.listingName }}
    </HeadingOne>
    <a-tabs v-model="activeKey">
      <a-tab-pane tab="Tab 1" key="1" class="flex justify-center">
        <CustomerDetailsTab
          v-on:goNext="next"
          :personal="personal"
          @event="
            (newPersonal) => {
              personal = newPersonal;
            }
          "
        />
      </a-tab-pane>

      <!-- TAB ONE  END--->

      <!-- TAB TWO --->

      <a-tab-pane tab="Tab 2" key="2" class="flex justify-center">
        <CustomersTab
          v-on:goNext="next"
          :customers="customers"
          @event="
            (cus) => {
              customers = cus;
            }
          "
          @inputData="showData"
        />
      </a-tab-pane>
      <!-- TAB TWO  END--->
      <!-- TAB THREE --->

      <a-tab-pane tab="Tab 3" key="3" class="text-black flex justify-center">
        <CheckoutTab
          v-on:goNext="next"
          :errors="hasError"
          :loading="isLoading"
          :showErrorMessage="showError"
          @makeBooking="mutate"
        />
      </a-tab-pane>
      <!-- TAB THREE END--->
      <!-- TAB FOUR --->

      <a-tab-pane tab="Tab 4" key="4" class="text-black flex justify-center">
        <SuccessTab :bookingData="mutationObject" />
      </a-tab-pane>
      <!-- TAB FOUR END--->
    </a-tabs>
  </div>
</template>

<script>
import CustomersTab from "./CustomersTab";
import CustomerDetailsTab from "./CustomerDetailsTab";
import SuccessTab from "./SuccessTab";
import CheckoutTab from "./CheckoutTab";
import Typography from "../../components/typography";
const { HeadingOne } = Typography;
export default {
  name: "BookingIndex",
  components: {
    CustomersTab,
    CustomerDetailsTab,
    CheckoutTab,
    HeadingOne,
    SuccessTab,
  },
  apollo: {
    getAListing: {
      query: require("../../graphql/getAListing.gql"),
      variables() {
        return {
          listingId: this.$route.params.id,
        };
      },
    },
  },
  data() {
    return {
      activeKey: "1",
      personal: {
        date: "",
        email: "",
      },
      customers: [],
      isLoading: false,
      hasError: false,
      showError: "",
      mutationObject: {},
      getAListing: {},
    };
  },
  methods: {
    next(k) {
      this.activeKey = k.toString();
    },
    showData() {
      console.log(this.customers);
      alert(
        ` ${this.personal.date}${this.personal.number} ${this.personal.email}  ${this.customers[0].name}`
      );
    },
    mutate() {
      this.isLoading = true;
      this.$apollo
        .mutate({
          mutation: require("../../graphql/makeABooking.gql"),
          variables: {
            customerEmail: this.personal.email,
            bookingDate: this.personal.date,
            listingId: this.$route.params.id,
            customers: this.customers,
          },
        })
        .then((data) => {
          console.log(data);
          this.isLoading = false;
          this.mutationObject = data.data.makeABooking;
          this.activeKey = "4";
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.hasError = false;
          this.showError = error;
        });
    },
  },
};
</script>
<style>
.ant-tabs-bar.ant-tabs-top-bar {
  display: none;
}
</style>

```

🐢 We have the Antd Tabs component hooked up to the `v-model` with a field called `activeKey`. This is to tell the component which tab will be active.

🐢 In the first tab we give it a key of 1 and this will be where we will create a form for the date etc. At the bottom we have the Red button and Red Outline button if you click on it will take you to the next tab while te Red outline button wil push you to the home page.

🐢 In the second tab we will add a form for the people the person is traveling with. It works similar to the 1st tab, in that if you click the buttons it will route you to the next or previous tab.

🐢 The third tab will enable us to charge the user for their trip

🐢 The fourth tab is the confirmation one that will fire once they ahve successfully paid for the trip.

Next up we will start building out the forms.
