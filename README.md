# Proof of Concept - Api Gateway Aynchronous call to Lambda

Calling the async endpoint on the Api Gateway will return immediately while the execution continues in the Lambda. 

For example, this logging is produced:

2023-02-16T12:22:**11**.488-05:00    INFO Hello

2023-02-16T12:22:**16**.495-05:00   INFO World!

Note the 5 second interval between the "Hello" and "Word" logging. Meanwhile the request responds in a few milliseconds.


References:
- https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-integration-async.html
- https://medium.com/@piyush.jaware_25441/invoking-lambda-asynchronously-with-aws-api-gateway-bac75cb86062