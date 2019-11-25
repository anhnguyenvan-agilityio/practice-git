"use strict";

const AWS = require("aws-sdk");
const aws_region = "us-east-1";

const accessKeyId = "AKIAUC5HZBOFNPTT7SXU";
const secretAccessKey = "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";

const awsConfig = {
  region: aws_region,
  accessKeyId,
  secretAccessKey
};

AWS.config.update(awsConfig);

// const sqs = new AWS.SQS({ apiVersion: "2012-11-05" });

// var params = {
//   DelaySeconds: 10,
//   MessageBody: "AnhNguyenVan Test",
//   QueueUrl: "https://sqs.us-east-1.amazonaws.com/281135352714/TransactionQueue"
// };

// sqs.sendMessage(params, function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data.MessageId);
//   }
// });

// Create publish parameters
var params = {
  Message: "Test SNS 1",
  TopicArn: "arn:aws:sns:us-east-1:281135352714:TransactionTopic"
};

// Create promise and SNS service object
var publishTextPromise = new AWS.SNS({ apiVersion: "2010-03-31" })
  .publish(params)
  .promise();

// Handle promise's fulfilled/rejected states
publishTextPromise
  .then(function(data) {
    console.log("MessageID is " + data.MessageId);
  })
  .catch(function(err) {
    console.error(err, err.stack);
  });
