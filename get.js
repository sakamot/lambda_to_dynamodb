var AWS = require('aws-sdk');
var dynamo = new AWS.DynamoDB({
    region: 'ap-northeast-1'
});

exports.handler = (event, context, callback) => {
    var params = {
        "TableName": "table"
    };
    var res = {meigen: []};
    dynamo.scan(params, function(err, data) {
        if (err) {
            callback(err); // エラー時
        } else {
            var items = data["Items"];
            var text = items[Math.floor(Math.random() * items.length)]["text"]["S"]; // ランダムで1件取得
            items.forEach(function(text){
                res["meigen"].push(text["text"]["S"]);
            });
            callback(null, res);
        }
    });
    return;
};
