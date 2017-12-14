A prototype application using deck.gl and Mapbox GL to map Site Data from the http://sms-sgs.ic.gc.ca/ portal.
This work is based on the tutorial provided by [VIS-ACADEMY](http://vis.academy/#/).

# Usage
## Install
Install Node.js. Clone the repository. Run
```
> npm install
```
## Run locally
Run
```
> npm run start
```
## Build and deploy to web server
Run
```
> npm run build
```
and move the following files to the web server:
* css/*
* bundle.js
* bundle.js.map
* favicon.ico
* html.config.js
* index.html
* root.js
