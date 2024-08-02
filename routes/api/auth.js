const route = require("express").Router();
const mysql = require("mysql");

// Connect to mysql.
const conn = mysql.createConnection({
    host: "mysql-368dfd1c-duyvipka2008-2026.e.aivencloud.com",
    port: 25983,
    user: "avnadmin",
    password: "AVNS_5M7T-PNu1r1STRbyXoA",
    database: "defaultdb"
});
conn.connect();
conn.query("CREATE TABLE IF NOT EXISTS user(id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(50) NOT NULL, password VARCHAR(50) NOT NULL, email VARCHAR(80) NOT NULL)");

// Connect to mysql.
const conn = mysql.createConnection({
    host: "mysql-368dfd1c-duyvipka2008-2026.e.aivencloud.com",
    port: 25983,
    user: "avnadmin",
    password: "AVNS_5M7T-PNu1r1STRbyXoA",
    database: "defaultdb"
});
conn.connect();
conn.query("CREATE TABLE IF NOT EXISTS user(id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(50) NOT NULL, password VARCHAR(50) NOT NULL, email VARCHAR(80) NOT NULL)");


/*
Request id:
1    REGISTER
2    LOGIN
3    FORGOT PASSWORD

Response id:
1    LOGIN
2    WRONG USERNAME OR PASSWORD
*/


route.post("/authorize", function(req, res) {
    const body = req.body;
    if (body.requestId != 2) {
        return;
    }
    const username = body.username;
    const password = body.password;
    conn.query('SELECT * FROM user WHERE username = "' + username + '" OR email = "' + username + '"', function(error, result, fields) {
        if(result.length > 0) {
            if(result.password != password) {
                route.send(2);
                return;
            }
            route.send(1);
            return;
        }
        route.send(2);
    });
});

module.exports = route;