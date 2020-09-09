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
import SeedLogo from "./images/seed.png"
import airtable from "./images/airtable.svg"
import aws from "./images/aws.svg"
import figma from "./images/figma.svg"
import github from "./images/github.svg"
import netlify from "./images/netlify.svg"
import miro from "./images/miro.svg"
import seed from "./images/seed.svg"
const partners = [
  {
    logo: github,
    use: "Hosting of repos",
    url: "",
  },
  {
    logo: aws,
    use: "Cloud provider",
    url: "",
  },
  {
    logo: seed,
    use: "CI/CD provider",
    url: "",
  },
  {
    logo: airtable,
    use: "Product management",
    url: "",
  },
  {
    logo: figma,
    use: "Prototyping",
    url: "",
  },
  {
    logo: netlify,
    use: "Hosting/CMS",
    url: "",
  },
  {
    logo: miro,
    use: "Product management",
    url: "",
  },
]
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
  {
    logo: SeedLogo,
    technology: "Seed",
    url: "http://seed.run/",
  },
]

const filterByPart = (array, path) => {
  const result = array
    .filter(i => i.node.frontmatter.part.trim() === path)
    .sort(
      (a, b) => a.node.frontmatter.postnumber - b.node.frontmatter.postnumber
    )
  return result
}

const filterByChapter = (array, path) => {
  const result = array
    .filter(i => i.node.frontmatter.chapter.trim() === path)
    .sort(
      (a, b) => a.node.frontmatter.postnumber - b.node.frontmatter.postnumber
    )
  return result
}
const filterByFramework = (array, path, framework) => {
  const result = array
    .filter(
      i =>
        i.node.frontmatter.chapter.trim() === path &&
        i.node.frontmatter.framework === framework
    )
    .sort(
      (a, b) => a.node.frontmatter.postnumber - b.node.frontmatter.postnumber
    )
  return result
}
export default {
  techStack,
  backendTechStack,
  filterByPart,
  filterByChapter,
  filterByFramework,
  partners,
}
