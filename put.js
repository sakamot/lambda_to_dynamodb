const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: "ap-northeast-1" // DynamoDBのリージョン
});

exports.handler = (event, context, callback) => {
  const params = {
    TableName: "table", // DynamoDBのテーブル名
    Item: {
      "text": event['body-json'].text
    }
  };
  
  // DynamoDBへのPut処理実行
  dynamoDB.put(params).promise().then((data) => {
    var res = {};
    res.text = "追加しました😁"
    callback(null, res);
  }).catch((err) => {
    console.log(err);
    callback(err);
  });
};
