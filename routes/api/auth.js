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
    res.send(req.body);
});