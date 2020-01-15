# log-analytics
Small service to ingest and parse a log file and give a few simple analytics

## Instrunctions
 - `npm install`
 - `npm test`
 - `npm start`

## Dependencies
 - NodeJs 10
 - Jest

 ## What to improve
 - Read file is also calling analytics, maybe it could receive the side effects as callback functions
 - Create a wrapper for file reader so it can be more flexible
 - Use composition in analytics (attributes and behaviors)
 - Create a printer to iterate trough the list and print messages