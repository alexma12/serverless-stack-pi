import handler from "./libs/handler-libs"
import dynamoDB from "./libs/dynamodb-libs";

export const main = handler(async (event, context) => {
    const params = {
        TableName: process.env.tableName,
        KeyConditionExpression: "userid = :userid",
        ExpressionAttributeValues: {
           ":userid": "123"
        }
    }
    const result = await dynamoDB.query(params);

    return result.Items;
});