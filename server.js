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


app.get('/squad', function(req,res){
    knex.raw("SELECT * FROM friends WHERE friend1_id='Ryan'").then(function(data){
      res.send(data.rows);
    })
});
app.get('/events', function(req,res){
    knex.raw("SELECT * FROM events WHERE organizer_id='1'").then(function(data){
      res.send(data.rows);
    })
});
app.get('/connection/sched/:id', function(req,res){
  var name =req.params.id;
    knex.raw(`SELECT * FROM users WHERE name='${name}'`).then(function(data){
      var id = data.rows[0].id;
      knex.raw(`SELECT * FROM events WHERE organizer_id='${id}'`).then(function(data){
      res.send(data.rows);
      })
    })
});
app.get('/fr', function(req,res){
    knex.raw("SELECT * FROM users WHERE name='Ryan'").then(function(data){
      res.send(data.rows);
    })
});
app.get('/yes/:id', function(req,res){
    var id = req.params.id;
    knex.raw("SELECT * FROM users WHERE name='Ryan'").then(function(data){
      var events = data.rows[0].events + 1;
      knex.raw(`UPDATE users SET events='${events}' WHERE name='Ryan'`).then(function(data){
        knex.raw(`DELETE FROM events where id=${id}`).then(function(data){
          res.send(data.rows)
        });
      });
    })
});
app.get('/no/:id', function(req,res){
    var id = req.params.id;
    knex.raw(`DELETE FROM events where id=${id}`).then(function(data){
      res.send(data.rows);
    })
});
app.get('/flake/:id', function(req,res){
  var id = req.params.id;
  knex.raw("SELECT * FROM users WHERE name='Ryan'").then(function(data){
    var events = data.rows[0].events + 1;
    var flakes = data.rows[0].fr + 1;
    knex.raw(`UPDATE users SET events='${events}',fr='${flakes}' WHERE name='Ryan'`).then(function(data){
      knex.raw(`DELETE FROM events where id=${id}`).then(function(data){
        res.send(data.rows)
      });
    });
  })
});
app.get('/connectfr/:id', function(req,res){
    var connectionName = req.params.id;
    knex.raw(`SELECT * FROM users WHERE name='${connectionName}'`).then(function(data){
      res.send(data.rows);
    })
});

app.post('/form', function(req, res) {
    var name = req.body[0];
    var date = req.body[1];
    var activity = req.body[2];
    var public = req.body[3];
    console.log(`INSERT INTO events values(default,'${name}','${date}','${activity}','1','${public}');`);
    knex.raw(`INSERT INTO events values(default,'${name}','${date}','${activity}','1','${public}');`).then(function(data){
      res.status(200).send("Successfully posted ingredient");
    })

});

app.listen(process.env.PORT || '3000');
