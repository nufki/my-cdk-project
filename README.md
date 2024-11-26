# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template


Run this beforehand if your aws account has not yet been bootstrapped....
`cdk bootstrap`



# Generally, how to create a empty lambda sdk project
````
mkdir my-cdk-project
cd my-cdk-project
cdk init app --language=typescript
````

For lambdas run then also install:
`npm install --save-dev @types/aws-lambda`

Then write your code...
Bootstrap:
`cdk bootstrap`

Deploy:
`cdk deploy`

Test:
`curl -X GET "https://y7oc8ukbp2.execute-api.eu-west-1.amazonaws.com/prod/greet?name=Kei"`
{"message":"Hello, Kei!","timestamp":"2024-11-26T11:01:37.950Z"}

CORS:
#todo
