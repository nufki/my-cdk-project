import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {NodejsFunction} from "aws-cdk-lib/aws-lambda-nodejs";
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class MyCdkProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'MyCdkProjectQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });


    // Don't use:
    /*
    const myFunction = new lambda.Function(this, 'MyFunction', {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('lambda'),
    });
     */

    // Use: NodejsFunction
    /*
      Bundling: The NodejsFunction construct automatically handles the bundling of your code using esbuild,
      which includes transpiling TypeScript to JavaScript and bundling dependencies. This process happens
      in a Docker container that matches the Node.js version specified for the Lambda function
     */
    const myFunction = new NodejsFunction(this, 'MyFunction', {
      entry: 'lambda/index.ts', // Path to your Lambda function code
      handler: 'handler',
      runtime: lambda.Runtime.NODEJS_18_X,
    });

    // Create an API Gateway REST API resource backed by the Lambda function
    const api = new apigateway.LambdaRestApi(this, 'MyApi', {
      handler: myFunction,
      proxy: false // Allows for more control over the API structure
    });

    // Define a resource and method for the API
    const greet = api.root.addResource('greet');
    greet.addMethod('GET'); // GET /greet

  }
}
