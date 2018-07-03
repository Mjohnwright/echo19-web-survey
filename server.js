// Load the AWS SDK
const AWS = require('aws-sdk');

const getSecretString = (secretName, cb) => {
  const client = new AWS.SecretsManager({ endpoint: 'https://secretsmanager.us-east-1.amazonaws.com', region: 'us-east-1' });
  client.getSecretValue({ SecretId: secretName }, (err, data) => {
    if (err) {
      if (err.code === 'ResourceNotFoundException') {
        console.log(`The requested secret ${secretName} was not found`);
      } else if (err.code === 'InvalidRequestException') {
        console.log(`The request was invalid due to: ${err.message}`);
      } else if (err.code === 'InvalidParameterException') {
        console.log(`The request had invalid params: ${err.message}`);
      }
    } else {
      cb(data.SecretString);
    }
  });
};

module.exports.getSecretString = getSecretString;
