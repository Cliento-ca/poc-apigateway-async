import {APIGatewayProxyEvent} from 'aws-lambda';


export const handler = async (event: APIGatewayProxyEvent) => {
    console.log("Hello");
    function wait(){
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("World!"), 5000)
        });
    }
    console.log(await wait());
};
