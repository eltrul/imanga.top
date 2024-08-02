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

    function write(content) 
    {
        fs.writeFile(this.getFullPath(), content); 

    }

    function replace(content) 
}

function result.readFile(filename)
{
    return fs
}
