/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    // Extract HTTP method and path from the event
    const { httpMethod, path } = event;

    let response;

    switch (httpMethod) {
        case 'GET':
            response = handleGetRequest(path);
            break;
        case 'POST':
            response = handlePostRequest(event);
            break;
        // Add more cases for other HTTP methods (PUT, DELETE, etc.)
        default:
            response = {
                statusCode: 405,
                body: JSON.stringify({ message: 'Method Not Allowed' }),
            };
    }

    // Add CORS headers to the response
    return {
        ...response,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
    };
};

const handleGetRequest = (path) => {
    // Add logic to handle GET requests
    return {
        statusCode: 200,
        body: JSON.stringify({ message: `GET request to ${path}` }),
    };
};

const handlePostRequest = (event) => {
    // Add logic to handle POST requests
    const body = JSON.parse(event.body);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'POST request received', data: body }),
    };
};