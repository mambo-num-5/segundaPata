var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database/index.js');
var app = express();
// var corsPrefetch = require('cors-prefetch-middleware');
// var imagesUpload = require('images-upload-middleware');


app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));


app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log("get all items request performed")
      res.json(data);
    }
  });
});
app.get('/toys', function (req, res) {
  items.selectToys(function(err, data) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log("get all toys request performed")
      res.json(data);
    }
  });
});

app.get('/clothes', function (req, res) {
  items.selectClothes(function(err, data) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/beds', function (req, res) {
  items.selectBeds(function(err, data) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/accesories', function (req, res) {
  items.selectAccesories(function(err, data) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log("get all accesories request performed")
      res.json(data);
    }
  });
});


app.post('/items', function(req, res) {
  let name = req.body.name;
  let descrip = req.body.descrip;
  let price = req.body.price;
  let category = req.body.category;
  let email = req.body.email;
  let vendor = req.body.vendor;
  console.log(name);
  if (!name) {
    res.sendStatus(400);
  } else {
    items.insertProduct(name, descrip, price, category, email, vendor, (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).json(results);
      }
    });
  }
});



// app.post('/multiple', imagesUpload(
//     './server/static/multipleFiles',
//     'http://localhost:9090/static/multipleFiles',
//     true
// ));
//
// app.post('/notmultiple', imagesUpload(
//     './server/static/files',
//     'http://localhost:9090/static/files'
// ));

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
