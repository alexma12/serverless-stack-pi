import handler from "./libs/handler-libs"
import dynamoDB from "./libs/dynamodb-libs"

export const main = handler(async (event, context) => {
    const params = { 
        TableName: process.env.tableName,
        Key: { 
            userid: "123",
            noteid: event.pathParameters.id 
        }
    }

    await dynamoDB.delete(params);
    return{
        status: true
    }
});
