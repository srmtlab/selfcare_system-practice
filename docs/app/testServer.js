var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.post('/',function(req, res){
    var obj = {};
    console.log('body: ' + JSON.stringify(req.body.name));
    console.log("content: " + JSON.stringify(req.body));
    var rejson = JSON.stringify(req.body);
    res.send(rejson);
});

app.listen(3000);