const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: "ap-northeast-1" // DynamoDBのリージョン
});

exports.handler = (event, context, callback) => {
  const params = {
    TableName: "table", // DynamoDBのテーブル名
    Key: {
      "text": event['body-json'].text
    }
  };
  
  // DynamoDBへの削除処理実行
  dynamoDB.delete(params, function(err, data) {
    if (err) { 
      callback(err);
    } else {
      var res = {};
      res.text = "削除しました🆗";
    }
  });
};
