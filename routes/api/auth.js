"use strict"; 

const crypto = require("crypto"); 

const route = require("express").Router();

var user = require("../../functions/userFunction"); 

/*
Request id:
1    REGISTER
2    LOGIN
3    FORGOT PASSWORD

Response id:
1    LOGIN
2    WRONG USERNAME OR PASSWORD
*/



module.exports = function(db) 
    {
        var user = new user(db); 
        route.post("/authorize/:type/", (req, res) => 
            {
                var body = req.body; 
                switch (req.params.type) 
                    {
                        case "login": 
                            if (!body.username || !body.password 
                                ) 
                            {
                                return res.status(422).send({
                                    status: "failed", 
                                    error: "422 Unprocessable Entity",
                                    data: []
                                });
                            } 
                            var hashedPassword = crypto.SHA256(body.password); 
                            var result = user.findUser({username: body.username, hashedPassword: hashedPassword}); 
                            if (!result) 
                            {
                                return res.status(404).send({
                                    status: "failed", 
                                    error: "404 User Not Found", 
                                    data: []
                                });
                            } 

                            return res.status(200).send({
                                status: "success", 
                                data: {
                                    token: result.getToken()
                                }
                            });
                        break;
                        case "reset_password": 
                            {
                                if (!body.token || !body.oldPassword || !body.newPassword) return res.status(422).send({
                                    status: "failed", 
                                    error: "422 Unprocessable Entity",
                                    data: []
                                }); 
                                var result = user.validateToken(body.token); 
                                if (!result) res.status(401).send({
                                    status: "failed", 
                                    error: "401 Unauthorized", 
                                    data: []
                                }) 

                                var target = user.findUser({username: result.username}); 

                                if (!target) return res.status(404).send({
                                    status: "failed", 
                                    error: "404 User Not Found", 
                                    data: []
                                }); 

                                if (target.hashedPassword != crypro.SHA256(body.oldPassword)) 
                                {
                                    return res.status(404).send({
                                       status: "failed", 
                                       error: "401 Unauthorized", 
                                       data: []
                                    });
                                } 

                                target.resetPassword(body.newPassword); 
                                res.status(200).send({
                                    status: "success", 
                                    data: [] 
                                });
                            }
                    }
            });
    }
/*
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
*/
