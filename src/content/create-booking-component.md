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

First head over and create a booking directory and create an Index.vue file with the following:

```
<template>
  <div>

        <a-tabs v-model="activeKey">
          <a-tab-pane tab="Tab 1" key="1" class="flex justify-center">
            <div class="flex flex-col p-20 ">
              <HeadingOne>
                Booking for Listing Name
              </HeadingOne>

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
  </div>
</template>

<script>
import HeadingOne from "../../components/typography/HeadingOne";

import RedBlockButton from "../../components/buttons/RedBlockButton";
import RedOutlineButton from "../../components/buttons/RedOutlineButton";


export default {
  name: "Index",
  components: {
    HeadingOne,
    RedBlockButton,
    RedOutlineButton,

  },
  data() {
    return {
      activeKey: "1",

    };
  },
  methods: {
    next(k) {
      this.activeKey = k.toString();
    }
  }

};
</script>
<style>
.ant-tabs-bar.ant-tabs-top-bar {
  display: none;
}


</style>

```

🐢 We have the Antd Tabs component hooked up to the v-model with a field called activeKey. This is to tell the component which tab will be active.

🐢 In the first tab we give it a key of 1 and this will be where we will create a form for the date etc. At the bottom we have the Red button and Red Outline button if you click on it will take you to the next tab while te Red outline button wil push you to the home page.

🐢 In the second tab wee will add a form for the people the person is traveling with. It works similar to the 1st tab, in that if you click the buttons it will route you to the next or previous tab.

🐢 The third tab will enable us to charge the user for their trip

🐢 The fourth tab is the confirmation one that will fire once they ahve successfully paid for the trip.

Next up we will start building out the forms.
