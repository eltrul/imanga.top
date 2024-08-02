"use strict"; 

const config = require("./config.json"); 

const chalk = require("chalk"); 

var mongoConnection = require("./database/mongoConnection"); 
var mongoConnection = new mongoConnection(config.mongo.url);

const util = require("./utilly"); 

const routeInitalizer = require("./api/routeInitalizer"); 

routeInitalizer(mongoConnection); 
