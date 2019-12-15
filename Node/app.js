// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var express = require('express');
var app = express();
const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'

app.set('view engine', 'ejs');


var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(__dirname + '/public')); //stylesheets




// routes will go here

app.get('/search', function(req, res) {
  res.render('search')
});

app.post('/search', function(req, res) {
  var user_id = req.body.id;



  mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
  if (err) {
    console.error(err)
  
    return
  }

  var db = client.db('HR');
  const collection = db.collection('Orientation');


  collection.findOne({_id: user_id}, (err, item) => {
    if (item == null) {
      res.render('searchresults', {results: null})
    } else if(item) {
      res.render('searchresults', {results: item})
    }
  })

  })
});


// POST http://localhost:8080/api/users
// parameters sent with 

app.get('/user/:id', (req, res) => {


  console.log("Employee ID not found, adding to database")
  collection.insertOne({_id: user_id}, (err, result) => {
    if (err) {
      console.log("there was a problem adding employee to database");
        res.render('failure');
            console.log(err);
    } else {
        console.log("Employee " + user_id + " has been successfully added to database");
            conf.findOne({_id: 'pages'}, (err, item) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(item);
                        delete item._id
                            collection.updateOne({_id: user_id}, {'$set': item}, (err, item) => {
                                if (err) {
                                    console.log(err);
                                } else {

                                    collection.updateOne({_id: user_id}, {'$set': obj}, (err, item) => {
                                        if (err) {
                                            console.log("There was a problem updating the database");
                                                res.render('failure');
                                                    console.log(err);
                                        } else {
                                            console.log("Employee " + user_id + " has completed " + page + ", successfully added to database")
                                                res.render('success');
                                        }
                                    });
                                }
                            })
                        }
                });
    }
  })
})

app.post('/submit', function(req, res) {
  var user_id = req.body.id;
  var token = req.body.token;
  var page = req.body.page;

  mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
  if (err) {
    console.error(err)
    res.render('failure');
    return
  }
  var db = client.db('HR');
  const collection = db.collection('Orientation');
  const conf = db.collection('Conf');

collection.findOne({_id: user_id}, (err, item) => {

      var key = page;
      var obj = {};
      obj[key] = true;

  if (item !== null) {
    collection.updateOne({_id: user_id}, {'$set': obj}, (err, item) => {
      if (err) {
        console.log("There was a problem updating the database");
        res.render('failure');
        console.log(err);
      } else {
      console.log("Employee " + user_id + " has completed " + page + ", successfully added to database");
      res.render('success');
      }
    })

  } else if (item == null){






  }

});

});


});






// start the server
app.listen(port);
console.log('Server started! V2 At http://localhost:' + port);