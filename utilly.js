"use strict"; 

const fs = require("node:fs"); 
const path = require("node:path"); 

var result = {}; 

// wtf am i doing? :sob:
class FileManager 
{
    __construct(fileName) 
    {
        this.name = fileName; 
        this.read();
    }

    function getFullPath() 
    {
        return path.join(__dirname, this.name); 
    }

    function read() 
    {
        this.content = fs.readFile(getFullPath());
        return this;
    } 

    function content() 
    {
        return this.content; 
    } 

    function toJson() 
    {
        try 
        {
            return JSON.parse(this.content); 
        } 
        catch 
        {
            return false;
        }
    }

    function replace(content) 
    {
        fs.writeFile(this.getFullPath(), content); 
        return this;
    }

    function write(content) 
    {
        this.replace(this.content + content);
        return this;
    }

    function writeAsJson(content) 
    {
        this.replace(JSON.stringify(content)); 
        return this; 
    }
}


function result.readFile(filename)
{
    return new FileManager(filename);
} 

module.exports = result;
