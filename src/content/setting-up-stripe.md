---
path: /setting-up-stripe
title: Setting Up Stripe
tag: backend
date: 2020-05-17T18:49:34.862Z
part: Building backend
chapter: Make a booking mutation
postnumber: 14
---

In this section we will get a stripe account setup. Head over to [Stripe](https://stripe.com) and sign up for an account, once you're all setup, you will land on the dashboard. We need to get the API Keys, so click on the "Developers" link on the left hand side:

![stripe](/uploads/stripe_step1.png)

Then click on API Keys:

![stripe](/uploads/stripe_step2.png)

Then copy the Secret key:

![stripe](/uploads/stripe_step3.png)

Next up create a `.env` file in the root of your project and the secret key :

```javascript
STRIPE_SECRET_KEY = sk_test_stuff
```

Then in your `serverless.yml` file add the key in the environment part in the provider block:

```yaml
provider:
  name: aws
  runtime: nodejs10.x
  stage: dev
  region: us-east-1
  profile: personalAccount
  environment:
    stripeSecretKey: ${env:STRIPE_SECRET_KEY}
```

This should be enough for us to complete the function now.
