var mongoClient = require('mongodb').MongoClient

var url = "mongodb://localhost:27017/"

var express = require('express')
var fs = require('fs')
var app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/getUsers',function(req,res){
    mongoClient.connect(url,function(err,db){
    if(err) throw err
    var dbo = db.db("std")

   dbo.collection("user").find({}).toArray (function(err,result){
    if(err) throw err
    //console.log(result)
    res.end(JSON.stringify(result))
    db.close()
})

})

})

app.get('/getUsers/:id',function(req,res){
    mongoClient.connect(url,function(err,db){
    if(err) throw err
    var dbo = db.db("std")

    dbo.collection("user").find({id:parseInt(req.params.id)}).toArray (function(err,result){
        if(err) throw err
        //console.log(result)
        res.end(JSON.stringify(result))
        db.close()
})
})
})

app.post('/addUser',function(req,res){
    mongoClient.connect(url,function(err,db){
        if(err) throw err
        var dbo = db.db("std")    
        var myobj = req.body

        dbo.collection("user").insertOne(myobj, function(err,result){
            if(err) throw err
            //console.log(result)
            res.end(JSON.stringify(result))
            db.close()
    })
})
})

var server = app.listen(3000,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Application run at http://%s:%s",host,port)
    
})
