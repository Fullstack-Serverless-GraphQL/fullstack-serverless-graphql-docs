---
path: /create-booking-forms-part-one
title: Create Booking Forms Pt.1
tag: frontend
date: 2020-07-29T18:03:50.120Z
part: frontend
postnumber: 47
framework: react
chapter: Make A Booking Mutation
---
In this two part section we will create the booking booking forms as well us hook up our local resolvers to the forms.

First up create a booking folder in the pages directory, and create an index.js with the following: 

```javascript
import React, { useState } from "react";
import Tabs from "../../components/navs/Tabs";
import CustomerDetails from "./CustomerDetails";
import Customers from "./Customers";
import Checkout from "./Checkout";
import ConfirmationTab from "./ConfirmationTab";
const BookingIndex = (props) => {
  const [activeTab, setActiveTab] = useState("1");


  return (
    <>
      <Tabs activeKey={activeTab}>
        <Tabs.TabPane key="1" className="flex justify-center">
          <CustomerDetails
            setActiveTab={setActiveTab}
    
          />
        </Tabs.TabPane>
        <Tabs.TabPane key="2" className="flex justify-center">
          <Customers
            setActiveTab={setActiveTab}
     
          />
        </Tabs.TabPane>
        <Tabs.TabPane key="3" className="flex justify-center">
          <Checkout setActiveTab={setActiveTab} />
        </Tabs.TabPane>
        <Tabs.TabPane key="4" className="flex justify-center">
          <ConfirmationTab setActiveTab={setActiveTab} />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default BookingIndex;

```

🌊  Here we have a component with tabs that are hidden to allow the user to navigate between different forms.

🌊   Don't worry about some of the other components we will create them. We have an activeTab variable that tells the component which tab should be active, wee then pass down the setActiveTab down to each component so that we can change the active tabs when the user is in any component.

Next go into the navs directory and create a file called Tabs.js: 

```javascript
import styled from "styled-components";
import { Tabs } from "antd";
const TabStyles = styled(Tabs)`
  .ant-tabs-bar.ant-tabs-top-bar {
    display: none;
  }
`;

export default TabStyles;

```



🌊   Here we are basically overriting the styles from Ant Design for the Tabs so that we can hide the Tab bar with Styled Components

Next up lets add the route of the Booking index.:



```javascript
import React from "react";
import { Router } from "@reach/router";
import Home from "./pages/index";
import ViewListing from "./pages/ViewListing";
import BookingIndex from "./pages/booking";
const Routes = ({ props }) => {
  return (
    <Router>
      <Home path="/" props={props} />
      <ViewListing path="/listing/:id" props={props} />
      <BookingIndex path="/booking/:id" props={props} />
    </Router>
  );
};

export default Routes;

```

Make sure your routes.js component now looks like this.