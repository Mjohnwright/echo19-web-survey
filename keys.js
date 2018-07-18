// Load the AWS SDK
const AWS = require('aws-sdk');

const getSecretString = (secretName) => {
  return new Promise((resolve, reject) => {
    const client = new AWS.SecretsManager({ endpoint: 'https://secretsmanager.us-east-1.amazonaws.com', region: 'us-east-1' });
    client.getSecretValue({ SecretId: secretName }, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

module.exports.getSecretString = getSecretString;
