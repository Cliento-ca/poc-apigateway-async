import {APIGatewayProxyEvent} from 'aws-lambda';


export const handler = async (event: APIGatewayProxyEvent) => {
    console.log("sync!");
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'hello from sync',
        }),
    };
};
