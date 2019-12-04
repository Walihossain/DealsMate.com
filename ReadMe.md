## DealsMate.com

A website that users helps users track the latest deals on e-commerce websites. Currently configured to track prices from Amazon.ca and Amazon.com. Send user notification when there is a price change!

A live demo can be found here

## Features

Styling with Material-UI
React and Redux front end
Node, Express, MongoDB, Mongoose back end
Authentication with jwt tokens and passport.js
Scalable file upload to AWS S3 with presigned urls
Web Scraping using Puppeteer

## Local Build

1. clone or download the repository
2. setup the server side
   * From the root folder, run the command npm install
3. setup the client side
   * From the root folder, enter the client directory with cd client
4. Run the command npm install
5. Start the client
6. In the client directory, run the command npm start
7. Start the server
   * In the server directory, run the command npm run dev
8. The website can be found in http://localhost:3000/

## Requirements

* Nodejs installed on your computer
   * Check by running this command in the terminal node --version
   * If not installed, go to https://nodejs.org to download
* A MongoDB database
   * Can install a local database by downloading mongodb from https://www.mongodb.com/ and have it run before starting up the server and  client
   * Can create an online database for free at https://mlab.com/
* An AWS account and an S3 bucket
* Do not use your root account's credentials for this (or any) app. Create a new user with permissions only for the specific S3 bucket
   For the S3 bucket, make sure to enable public access. Change the CORS configuration of the bucket to allow GET requests from any        origin and PUT requests from http://localhost:3000 (and your production url if any). More info here


## Authors

Manpreet Kaur

Wali Navid Hossain
