import VueLogo from "./images/vue.svg"
import ApolloLogo from "./images/apollo.svg"
import AntLogo from "./images/ant.svg"
import Cognitologo from "./images/aws-cognito.svg"
import DynamoLogo from "./images/aws-dynamodb.svg"
import LambdaLogo from "./images/aws-lambda.svg"
import PostmarkLogo from "./images/postmark.jpeg"
import StripLogo from "./images/stripe.svg"
import TailwindLogo from "./images/tailwind.svg"
import ServerlessLogo from "./images/serverless.svg"

const techStack = [
  {
    logo: VueLogo,
    technology: "Vue",
    url: "https://vuejs.org/",
  },
  {
    logo: ApolloLogo,
    technology: "Vue Apollo",
    url: "https://vue-apollo.netlify.com/",
  },
  {
    logo: TailwindLogo,
    technology: "Tailwind CSS",
    url: "https://tailwindcss.com/",
  },
  {
    logo: AntLogo,
    technology: "Ant Design",
    url: "https://www.antdv.com/",
  },
]

const backendTechStack = [
  {
    logo: ServerlessLogo,
    technology: "Serverless",
    url: "https://serverless.com/",
  },
  {
    logo: ApolloLogo,
    technology: "Apollo Server",
    url: "https://www.apollographql.com/docs/apollo-server/",
  },
  {
    logo: Cognitologo,
    technology: "AWS Cognito",
    url: "https://aws.amazon.com/cognito/",
  },
  {
    logo: LambdaLogo,
    technology: "AWS Lambda",
    url: "https://aws.amazon.com/lambda",
  },
  {
    logo: DynamoLogo,
    technology: "AWS DynamoDB",
    url: "https://aws.amazon.com/dynamodb/",
  },
  {
    logo: StripLogo,
    technology: "Stripe",
    url: "https://stripe.com/",
  },
  {
    logo: PostmarkLogo,
    technology: "Postmark",
    url: "https://postmarkapp.com/",
  },
]
export default { techStack, backendTechStack }
