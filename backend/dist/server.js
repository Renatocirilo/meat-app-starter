"use strict";
exports.__esModule = true;
var jsonServer = require("json-server");
var fs = require("fs");
var https = require("https");
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
// Set default middlewares (logger, static, cors and no-cache);
server.use(middlewares);
server.use(jsonServer.bodyParser);
// Use default router
server.use(router);
var options = {
    cert: fs.readFileSync('./backend/keys/cert.pem'),
    key: fs.readFileSync('./backend/keys/key.pem')
};
https.createServer(options, server).listen(3001, function () {
    console.log('JSON Server is running on https://localhost:3001');
});

/*
    To monitor changes made to server.ts,
    we can access the backend via terminal and use the tsc -w command,
    if the dist folder does not create automatically,
    we must update typescript (npm install typescript)
*/
