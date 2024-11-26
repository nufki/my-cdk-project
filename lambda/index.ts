import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.log('Event: ', JSON.stringify(event, null, 2));

    try {
        // You can process the event here
        const name = event.queryStringParameters?.name || 'World';

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `Hello, ${name}!`,
                timestamp: new Date().toISOString()
            }),
            headers: {
                'Content-Type': 'application/json',
                // "Access-Control-Allow-Origin": "http://localhost:4200", add this if you want to restrict this to localhost...
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,GET"
            }
        };
    } catch (error) {
        console.error('Error: ', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Internal Server Error'
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
};