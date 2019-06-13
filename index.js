const AWS = require("aws-sdk");

const s3 = new AWS.S3();
const signedUrlExpireSeconds = 60 * 5;

const url = s3.getSignedUrl("putObject", {
  Bucket: "static-s3-authentication-playground-01",
  Key: "hello.txt",
  Expires: signedUrlExpireSeconds
});
console.log(url);

// curl -X PUT -T hello.txt -L '<url>'
// curl -X PUT -T hello.txt -L 'https://personalize-playground-01.s3.amazonaws.com/hello.txt?AWSAccessKeyId=0HCQ6GTWFM4HRE7RS0R2&Expires=1560378733&Signature=KZluUwBMNnUMYyjM1pa2UFSFdu4%3D'
