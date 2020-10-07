---
path: /create-listing-card-react
title: Create Listing Card
tag: frontend
date: 2020-07-16T18:47:33.532Z
part: frontend
postnumber: 42
framework: react
chapter: Building reusable components
---

In this post we will make a tour card that will allow us to display all our listings.

Create a `cards` directory and create `ListingCard.js` file:

```javascript
import React from "react"
import { Rate } from "antd"
import BodyOne from "../typography/BodyOne"
import PropTypes from "prop-types"
import "antd/dist/antd.css"

const ListingCard = ({
  listingTitle,
  listingLocation,
  price,
  rating,
  coverPhoto,
}) => (
  <>
    <div className="rounded-px w-card h-auto shadow-lg-card cursor-pointer">
      <img src={coverPhoto} className="w-full h-48 rounded-t-px" alt="cover" />
      <div className="flex flex-col p-2">
        <div className="flex flex-col mt-2 ">
          <BodyOne className="text-lg">{listingTitle}</BodyOne>
          <BodyOne className="text-sm text-grey">{listingLocation}</BodyOne>
        </div>

        <BodyOne className=" text-lg mt-8 text-green-dark">${price}</BodyOne>
        <Rate disabled defaultValue={rating} />
      </div>
    </div>
  </>
)

ListingCard.propTypes = {
  listingTitle: PropTypes.string,
  listingLocation: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.number,
  coverPhoto: PropTypes.string,
}
export default ListingCard
```

🎡 We have a `div` that we have given a `border-radius` and `box-shadow` that has width and height set to auto.

🎡 It takes props called `listingTitle`, `listingLocation`, `price`, `rating` and `coverPhoto`.

Next off we need to add Ant Design because we will use it's tabs and rating components.

```bash
$ yarn add antd
```

Once you're done, it will look like this:

![tour-card](/uploads/tourcard.png)
