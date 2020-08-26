---
path: /create-view-a-listing-page
title: Create View a Listing Page
tag: frontend
date: 2020-07-20T18:36:05.148Z
part: frontend
postnumber: 44
framework: react
chapter: View Listing
---

In this chapter we will create the page that will allow users to view an individual listing.

In the `pages` directory create a `ViewListing.js` file and add the following:

```javascript
import React from "react"
import RedBlockButton from "../components/buttons/RedBlockButton"
import { useQuery } from "@apollo/react-hooks"
import { GET_A_LISTING } from "../graphql/Queries"
import activy from "../assets/trip_type.svg"
import amenities from "../assets/trip_activity.svg"
import LandingHeader from "../components/navs/LandingHeader"
import { Skeleton } from "antd"

import {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  BodyOne,
} from "../components/typography"
const ViewListing = props => {
  const { loading, data, error } = useQuery(GET_A_LISTING, {
    variables: {
      listingId: props.id,
    },
  })

  if (loading) return <Skeleton />
  if (error) return <p className="text-red">{error}</p>

  const listing = data.getAListing
  return (
    <>
      <LandingHeader imgURL={listing.coverPhoto} />
      <div className="grid grid-cols-13 p-5 mt-10">
        <div className="mr-16">
          <HeadingOne className="font-display  font-semibold text-3xl text-black">
            {listing.listingName}
          </HeadingOne>
          <HeadingTwo className="font-display text-xl text-black mt-4 mb-8">
            {listing.listingLocation}
          </HeadingTwo>
          <HeadingThree className="font-display font-bold text-xl text-center s:text-left mb-5 text-black ">
            $ {listing.price}
          </HeadingThree>
          <BodyOne className="font-display text-left text-black ">
            {listing.listingDescription}
          </BodyOne>

          <HeadingThree className="font-display text-2xl font-bold text-black mt-10">
            Trip ammenities
          </HeadingThree>

          <div className="flex flex-col p-3" key="types">
            {listing.listingType.map((t, index) => (
              <div key={index} className="flex flex-row">
                <img src={activy} alt="activity" />
                <BodyOne className="font-display ml-2 mt-2">{t.name}</BodyOne>
              </div>
            ))}
          </div>

          <HeadingThree className="font-display text-2xl font-bold text-black  mt-10">
            Activites
          </HeadingThree>
          <div className="flex flex-col p-3" key="activies">
            {listing.listingActivities.map((a, index) => (
              <div key={index} className="flex flex-row">
                <img src={amenities} alt="amend" />
                <BodyOne className="font-display ml-2 mt-2">{a.name}</BodyOne>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col ">
          <div>
            <RedBlockButton
              onClick={() => props.navigate(`/booking/${props.id}`)}
              className=" text-center s:pr-20 mb-10 mt-10"
            >
              Book
            </RedBlockButton>
          </div>
          <div>
            <HeadingThree className="font-display text-xl   text-black mt-10 mb-10">
              Your guide
            </HeadingThree>
            <img
              src={listing.guide.Avatar}
              alt="guide"
              className="rounded-lg h-48"
            />
          </div>
          <div>
            <HeadingThree className="font-display text-xl   text-black mt-10">
              {listing.guide.Name}
            </HeadingThree>
            <BodyOne className="font-display   text-black mt-5 ">
              {listing.guide.Bio}
            </BodyOne>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewListing
```

👁️ Like with the `getAllListings` query we are hit the `GET_A_LISTING` query however we are passing in the listingId as the variable which we are getting from the URL of this component.

👁️ In our Return block we have basic markup with CSS Grid to display the content of the listing in a responsive manner. We also map over the activities and types with icons.

Next up go into the `Queries.js` file and add the following schema doc:

```javascript
export const GET_A_LISTING = gql`
  query GetAListing($listingId: String!) {
    getAListing(listingId: $listingId) {
      coverPhoto
      listingId
      listingName
      listingType {
        name
      }
      listingLocation
      listingActivities {
        name
      }
      listingDescription
      price
      numberOfDays
      guide {
        Bio
        Name
        Avatar
      }
      specialType
    }
  }
`
```

👁️ For this specific query we are specifing that the `listingId` is a string and we are querying all the fields from the `listing` Type

Next go over to the `routes.js` file and add the following:

```javascript
import React from "react"
import { Router } from "@reach/router"
import Home from "./pages/index"
import ViewListing from "./pages/ViewListing"
const Routes = ({ props }) => {
  return (
    <Router>
      <Home path="/" props={props} />
      <ViewListing path="/listing/:id" props={props} />
    </Router>
  )
}

export default Routes
```

👁️ All we doing here is making our `ViewListing` component accessabile on the `/listing/:id` route, where we will swap `:id` for the actual id of the listing from the server to enable us to query the API for the listing data.

👁️ By passing down the props into the components we can pass down functions from Reach router and other utils so that it is accessible in other parts of the application.

Now you should be able to view any listing.
