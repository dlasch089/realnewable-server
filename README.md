# realnewable Server (in Node.js)

This API is an open source project, developed in the scope of a master thesis at the Technical University of Munich. It is providing developers with the day-ahead information of the entso-e transparency platform (https://transparency.entsoe.eu/), in JSON-format for Germany. 

Everybody is invited to contribute in the project. 

Contact: d.lasch@tum.de

# Usage

The API can be accessed through **https://realnewable-server.herokuapp.com/**, which also states the **base url** for the following routes.

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

Possible areaIds are the following, with "germany" covering whole Germany and the four areas of German grid operators:
  - germany
  - tennet 
  - transnet
  - amprion
  - hertz
