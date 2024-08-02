const route = require("express").Router(); 

route.use(bodyParser.json());
route.use(bodyParser.urlencoded({
    extended: true
}));


/*
Request id:
1    REGISTER
2    LOGIN
3    FORGOT PASSWORD
*/


route.post("/authorize", function(req, res) {
    let requestId = req.id;
    if(requestId == 1) {
        route.send("Register");
        return;
    }
    if(requestId == 2) {
        route.send("Login");
        return;
    }
    route.send("Forget Password");
});