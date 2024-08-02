"use strict"; 

const express = require("express"); 

const app = express(); 

const bodyparser = require("body-parser"); 
const session = require('express-session');

const memorystore = require('memorystore')(session); 

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended: true
}));

app.use(session({
    secret: 'try to guess that',
    resave: false,
    store: new memorystore({
    checkPeriod: 86400000 
    }),
    saveUninitialized: false,
    cookie: { secure: false }
  })) 



const fs = require("node:fs"); 
const path = require("node:path"); 


const chalk = require("chalk"); 

const log = console.log; 

log(chalk.yellow("[+] Initalizing Routes")); 

module.exports = function(db) 
	{
		fs.readDirSync(__dirname).forEach(name => {
			log(chalk.yellow(`[+] Initalizing: ${name}`);
		});
        try 
		{ 
            definiitation = `/${name}`;
            app.use(require("."+definitation)(db), definitation); 
		} 
        catch(err) 
		{ 
            console.log(chalk.red(`[!] An Error Have Been Orruced: ${err}`));
        }
}
