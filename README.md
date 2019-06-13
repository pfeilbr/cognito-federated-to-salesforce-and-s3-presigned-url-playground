# cognito-federated-to-salesforce-and-s3-presigned-url-playground

## Login with Cognito Federated to Salesforce Example

* see [`index.html`](index.html)
* see `~/Dropbox/notes/static-s3-cognito-authentication.md` on local machine also for greater detail on setup

```sh
# local dev
# start server.  serves static files from current directory '.'.  listens on ssl 443
sudo node server.js
open https://localhost

# on s3
open https://pfeil-static-site-01.s3.amazonaws.com/index.html

# on cloudfront
open https://d3tz189emgpc7c.cloudfront.net/index.html

# copy updated file to s3
aws s3 cp index.html s3://pfeil-static-site-01/index.html
# invalidate cloudfront dist after copy

# if any login issues
# clear site data for https://pfeil-dev-ed.my.salesforce.com in chrome dev tools
```

## Pre-signed URL Example

* see [`index.js`](index.js)
* `node index.js` outputs pre-signed url. (uses ~/.aws/credentials and pre-signed URL generated under that users context/permission)
* PUT / upload file to S3 via `curl -X PUT -T hello.txt -L '<pre-signed url>'`

