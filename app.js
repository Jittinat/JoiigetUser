//////////////////////////
/*
var express = require('express')
var routing = express()
*/
/*
routing.get('/',function(req,res){
    res.send("<h1>Hello World</h1>")
})

routing.get('/',function(req,res){
    res.send("<h1>Welcome Home</h1>")
})

routing.get('/profile/:name',function(req,res){
    res.send("<h1>Welcome " + req.params.name+"</h1>")
})
*/

/*
routing.get('/showForm',function(req,res){
    res.sendFile(__dirname+"/showForm.html")
})

routing.get('/showData',function(req,res){
    data={
        fname: req.query.fname,
        lname: req.query.lname
    }
    //console.log(data)
    //res.end(JSON.stringify(data))
    res.end("<h1>"+data.fname+"</h1><br><em>"+data.lname+"</em>")
})
routing.listen(8081)
*/
//////////////////first
/////////////////start second
var express = require('express')
var fs = require('fs')
var app = express()

app.get('/getUsers',function(req,res){
    fs.readFile(__dirname+"/user.json",'utf8',
    function(err,data){
        console.log(data)
        res.end(data)
    })
})

app.get('/getUsers/:id',function(req,res){
    fs.readFile(__dirname+"/user.json",'utf8',
    function(err,data){
        var users = JSON.parse(data)
        var user = users["user"+req.params.id]

        console.log(user)
        res.end(JSON.stringify(user))
    })
})

var user = { //Global user
    "user4": {
        "name": "betty",
        "password": "4444",
        "occupation": "engineer",
        "id": 4
    }
}
////////get method
/* 
app.get('/addUser',function(req,res){
    fs.readFile(__dirname+"/user.json",'utf8',
    function(err,data){
        var userdata = JSON.parse(data)
        userdata["user4"] = user["user4"]
        console.log(userdata)
        res.end(JSON.stringify(userdata))
    })
})
*/
///////post method
app.post('/addUser',function(req,res){
    fs.readFile(__dirname+"/user.json",'utf8',
    function(err,data){
        var userdata = JSON.parse(data)
        userdata["user4"] = user["user4"]
        console.log(userdata)
        res.end(JSON.stringify(userdata))
    })
})

app.delete('/delUser/:id',function(req,res){
    fs.readFile(__dirname+"/user.json",'utf8',
    function(err,data){
        var userdata = JSON.parse(data)
        delete userdata["user"+req.params.id]
        console.log(userdata)
        res.end(JSON.stringify(userdata))
    })
})
var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Application run at http://%s:%s",host,port)
})



