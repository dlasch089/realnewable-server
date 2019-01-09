# realnewable Server (in Node.js)

This API is part of an open source project, developed in the scope of a master thesis at the Technical University of Munich. It is providing developers with the day-ahead information of the entso-e transparency platform (https://transparency.entsoe.eu/), in JSON-format for Germany. 

A possible usage of the API is the web app called "realnewable", calculating the momentum of electricity consumption for German end-consumers: https://realnewable.herokuapp.com

**Note: the app is currently running on a free plan of heroku and will therefore take some time to restart the server at the first call.**

Everybody is invited to contribute in the project. 

For further questions, please contact: d.lasch@tum.de

# Usage

The API can be accessed through **https://realnewable-server.herokuapp.com/**, which also states the **base url** for the following routes. 

For using the API you can fork or clone this repository and change the .env-variables to your specific frontend application. Please be aware of the CORS-settings in this app, which is not automatically whitelisting all requesting apps. Additionally, you need to define your API-key in the .env. 

The .env-file should contain the following:

MONGODB_URI=mongodb://*your database*

ENTSOE_KEY = *your security token*

CLIENT_URL = *your client URL*

## How to get your own ENTSO-E security token:

​The interface specification for the restful API is available online at: http://transparency.entsoe.eu/content/static_content/Static%20content/web%20api/Guide.html

 Please follow the steps below so as to get the access granted:

1. Register on Transparency Platform.

2. Request access to Rest API by sending email to transparency@entsoe.eu . 

Please indicate the email address with which you have registered.

3. After our confirmation that access has been granted, login to Production platform

4. Check your Account Settings. The Security Token should be visible under "Web Api Security Token"

**Note: the API is currently running on a free plan of heroku and will therefore take some time to restart the server at the first call.**

## Available routes

**base url: https://realnewable-server.herokuapp.com/**

Prognosis energy data for the current day:
1. /total-generation/:areaId
2. /solar/:areaId
3. /wind-offshore/:areaId
4. /wind-onshore/:areaId

Day-ahead prognosis data for the following day:
**Note: Only available after 6pm German time!**
1. /total-generation/tomorrow/:areaId
2. /solar/tomorrow/:areaId
3. /wind-offshore/tomorrow/:areaId
4. /wind-onshore/tomorrow/:areaId

Possible areaIds are the following, with "germany" covering whole Germany and the four areas of German grid operators (TenneT, Transnet, Amprion, 50hertz):
  - germany
  - tennet 
  - transnet
  - amprion
  - hertz


## Local Development

Please ensue the following steps for running the app locally. 
*Note: the realnewable API is written in Node.js with the express framework, using npm (https://www.npmjs.com/) as package management system. The author is recommending to use Visual Studio Code on Mac for development*

1. Fork the project
2. Use *npm install* to install all node-modules
3. Run *nodemon start*
4. App listens on port 3000 (e.g. http://localhost:3000/forecast/solar/germany)