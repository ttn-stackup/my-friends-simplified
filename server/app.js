var express = require("express");
var fs = require('fs');
var util=require('util');
var bodyParser=require('body-parser');

var app = express();

var NODE_PORT = process.env.PORT || 3000;

app.use("/bower_components", express.static(__dirname + "/../bower_components"));
app.use(express.static(__dirname + "/../client/"));
app.use(bodyParser());

//read JSON file data having friends list
var jsonData={};
fs.readFile(__dirname+'/data.json', 'utf8', function (err, data) {
    if (err) throw err;
    jsonData=JSON.parse(data);
});

app.get('/getData',function (req,res,next) {
    res.send(jsonData);
});

app.post('/saveData',function (req,res,next) {
    console.log('-------Data Saved Successfully-------');

    req.body.saved=1;
    jsonData.push(req.body);
    res.send(jsonData);

});

app.delete('/deleteData',function (req,res,next) {
     console.log('-------Data Deleted Successfully-------');
    var deleteId=req.query.id;
    for(var i = 0; i < jsonData.length; i++) {
        if(jsonData[i].id == deleteId) {

            jsonData.splice(i, 1);
            break;
        }
    }

    res.send(jsonData);
});

app.listen(NODE_PORT, function(){
    console.log("Server running at http://localhost:"+NODE_PORT);
});

