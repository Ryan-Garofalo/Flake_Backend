var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var knex = require('./db/knex');

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/animals', function(req,res){
    knex.raw("SELECT * FROM users").then(function(data){
      res.send(data.rows);
    })
});
app.get('/squad', function(req,res){
    console.log("hit this squad");
    knex.raw("SELECT * FROM friends WHERE friend1_id='Ryan'").then(function(data){
      res.send(data.rows);
    })
});
app.get('/events', function(req,res){
    knex.raw("SELECT * FROM events WHERE organizer_id='1'").then(function(data){
      console.log(data.rows);
      res.send(data.rows);
    })
});
app.get('/fr', function(req,res){
    console.log("hit this events");
    knex.raw("SELECT * FROM users WHERE name='Ryan'").then(function(data){
      res.send(data.rows);
    })
});

app.post('/form', function(req, res) {
    console.log("hit post");
    console.log(req.body);
    var name = req.body[0];
    var date = req.body[1];
    var activity = req.body[2];
    var public = req.body[3];
    console.log(`INSERT INTO events values(default,'${name}','${date}','${activity}','1','${public}');`);
    knex.raw(`INSERT INTO events values(default,'${name}','${date}','${activity}','1','${public}');`).then(function(data){
      console.log(data);
      res.status(200).send("Successfully posted ingredient");
    })

});

app.listen(process.env.PORT || '3000');
