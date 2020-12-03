import handler from "./libs/handler-libs"
import dynamoDB from "./libs/dynamodb-libs"

export const main = handler(async (event, context) => {
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.tableName,
        Key: {
            userid: "123",
            noteid: event.pathParameters.id
        },
        UpdateExpression: "SET content = :content, attachment = :attachment",
        ExpressionAttributeValues: {
            ":attachment": data.attachment || null,
            ":content": data.content || null,
        },
        ReturnValues: "ALL_NEW" //makes it so that it willl return the attributes of the item after the update 
    }

    await dynamoDB.update(params)

    return {status: true}
});