---
path: /create-booking-forms-part-two
title: Create Booking Forms Pt.2
tag: frontend
date: 2020-07-29T18:18:24.877Z
part: frontend
postnumber: 48
framework: react
chapter: Make A Booking Mutation
---

Here we will make two components: One to get the details of the customer and another to get all the customers travelling together.

In the `booking` directory create a file called `CustomerDetails.js` and add the following:

```javascript
import React from "react"
import { useMutation } from "@apollo/react-hooks"
import { UPDATE_FORM_DATA } from "../../graphql/Mutations"
import HeadingOne from "../../components/typography/HeadingOne"
import BodyOne from "../../components/typography/BodyOne"
import RedBlockButton from "../../components/buttons/RedBlockButton"
import RedOutlineButton from "../../components/buttons/RedOutlineButton"
import Input from "../../components/inputs/Input"
import { Form } from "antd"
const CustomerDetails = props => {
  console.log(props)

  const [mutate] = useMutation(UPDATE_FORM_DATA)

  return (
    <>
      <Form
        onValuesChange={(changedValues, allValues) => {
          mutate({
            variables: {
              email: allValues.email,
              date: allValues.date,
            },
          })
        }}
      >
        <div className="flex flex-col p-20 ">
          <HeadingOne>Booking for Listing Name</HeadingOne>
          <div className="mt-5">
            <BodyOne>Booking date</BodyOne>
            <Form.Item name="date">
              <Input placeholder="date" type="date" />
            </Form.Item>
          </div>

          <div className="mt-5">
            <BodyOne> Email address </BodyOne>
            <Form.Item name="email">
              <Input placeholder="doku@corrisant.io" type="email" />
            </Form.Item>
          </div>
          <div className="flex lg:flex-row mt-5 s:flex-col">
            <RedBlockButton
              text="Proceed"
              className="mr-5 s:mb-5 lg:mb-0"
              onClick={() => props.setActiveTab("2")}
            />

            <RedOutlineButton text="Cancel" />
          </div>
        </div>
      </Form>
    </>
  )
}

export default CustomerDetails
```

🌈 Here we have a Form from Ant Design that has a `onValuesChange` event that will get all the values of the form and send it to our local resolvers for updating the cache.

🌈 We then have a button that will allow the user to go to the next tab with the `setActiveTab` function we've sent down via props

In the same directory create a file called `Customers.js` and add the following:

```javascript
import React, { useState } from "react"
import { UPDATE_FORM_DATA } from "../../graphql/Mutations"
import { GET_FORM_DATA } from "../../graphql/Queries"
import { useMutation, useQuery } from "@apollo/react-hooks"
import BodyOne from "../../components/typography/BodyOne"
import Input from "../../components/inputs/Input"
import RedBlockButton from "../../components/buttons/RedBlockButton"
import RedOutlineButton from "../../components/buttons/RedOutlineButton"
import RemoveButton from "../../components/buttons/RemoveButton"
import BlueBlockButton from "../../components/buttons/BlueBlockButton"

const Customers = props => {
  const [customers, setCustomers] = useState([])
  const { data } = useQuery(GET_FORM_DATA)
  const [mutate] = useMutation(UPDATE_FORM_DATA)

  const addCustomer = () => {
    const o = [...customers]
    o.push({
      name: null,
      physioScore: null,
      surname: null,
      passportNumber: null,
      country: null,
    })

    setCustomers(o)
  }

  const updateCustomer = ({ index, field, value }) => {
    const o = [...customers]
    o[index][field] = value
    mutate({
      variables: {
        email: data.formData.email,
        date: data.formData.date,
        customer: o,
      },
    })

    setCustomers(o)
  }

  const removeCustomer = index => {
    const o = [...customers]
    o.splice(index, 1)
    setCustomers(o)
  }

  const inputs = customers.map((c, index) => {
    return (
      <>
        <div className="flex lg:flex-row s:flex-col mt-10" key={index}>
          <hr />
          <div className="flex flex-col mr-5">
            <BodyOne>Customer name </BodyOne>

            <Input
              placeholder="Bob"
              type="name"
              onChange={e =>
                updateCustomer({
                  index,
                  field: "name",
                  value: e.currentTarget.value,
                })
              }
            />

            <BodyOne> Customer country </BodyOne>

            <Input
              placeholder="Iran"
              type="text"
              onChange={e =>
                updateCustomer({
                  index,
                  field: "country",
                  value: e.currentTarget.value,
                })
              }
            />

            <BodyOne> Physio score </BodyOne>

            <Input
              placeholder="4"
              type="text"
              onChange={e =>
                updateCustomer({
                  index,
                  field: "physioScore",
                  value: e.currentTarget.value,
                })
              }
            />
          </div>
          <div className="flex flex-col">
            <BodyOne> Customer surname </BodyOne>

            <Input
              placeholder="Iger"
              type="text"
              onChange={e =>
                updateCustomer({
                  index,
                  field: "surname",
                  value: e.currentTarget.value,
                })
              }
            />

            <label> </label>
            <input />
            <BodyOne> Passport number </BodyOne>

            <Input
              placeholder="GFC3453453"
              type="text"
              onChange={e =>
                updateCustomer({
                  index,
                  field: "passportNumber",
                  value: e.currentTarget.value,
                })
              }
            />

            <RemoveButton onClick={() => removeCustomer(index)} />
          </div>
        </div>
      </>
    )
  })
  return (
    <div className="flex flex-col">
      {inputs}
      <div className="flex flex-col">
        <div className="mt-5 ">
          <BlueBlockButton onClick={() => addCustomer()}>
            Add a customer
          </BlueBlockButton>
        </div>
        <div className="flex lg:flex-row mt-5 s:flex-col">
          <RedBlockButton
            className="mr-5 s:mb-5  lg:mb-0"
            onClick={() => props.setActiveTab("3")}
          >
            Proceed
          </RedBlockButton>
          <RedOutlineButton onClick={() => props.setActiveTab("1")}>
            Back
          </RedOutlineButton>
        </div>
      </div>
    </div>
  )
}

export default Customers
```

🌈 Basically we have a component that will create an array of customers for us to add to the state.

🌈 first off we declare customers via a hook, we have a query to get data from the cache and have the mutation to update the cache data.

🌈 Our `addCustomer` function will allow us to make a deep clone of the `customers` currently in the state, then push a new `customer` to the array and update the state.

🌈 Our `updateCustomer` function will allow us to add the `customer` to the state of the cache.

🌈 `removeCustomer` will allow us to remove the customer from the state.

🌈 The inputs function renders customers over some `JSX` to produce a form that will allow the user to add data. There are `onChange` events that will allow the `customer` object to get updated.

🌈 The remove button removes the selected `customer` form the Array.

🌈 Our final return block displays the inputs function and renders buttons that allow the user to move between forms.
