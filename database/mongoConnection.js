const mongoose = require("mongoose"); 

const chalk = require("chalk"); 

const log = console.log;

const model = require("./Model.js');
module.exports = class mongoConnection
  {
    __constructor(url) 
    {
      mongoose.connect(url)
      .then(() => log(chalk.green("[+] Connected to mongodb services")))
      .catch((err) => { 
        log(chalk.red("[!] Failed to connect to mongodb"));
        log(err);
        process.exit();
      }) 
      this.model = new model(mongoose);
    }

    function Models() 
    {
      return this.model
    }
  }

                    
