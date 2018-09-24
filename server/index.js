var express = require('express');
var bodyParser = require('body-parser');
var item = require('../database/index.js');
var app = express()

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));


app.get('/items', function (req, res) {
 item.selectAll(function(err, data) {
   if(err) {
     res.sendStatus(500);
   } else {
     console.log("get all items request performed")
     res.json(data);
  }
 });
});
app.get('/toys', function (req, res) {
 item.selectToys(function(err, data) {
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
 item.selectClothes(function(err, data) {
   if(err) {
     console.log(err);
     res.sendStatus(500);
   } else {
     res.json(data);
   }
 });
});

app.get('/beds', function (req, res) {
 item.selectBeds(function(err, data) {
   if(err) {
     console.log(err);
     res.sendStatus(500);
   } else {
     res.json(data);
   }
 });
});

app.get('/accesories', function (req, res) {
 item.selectAccesories(function(err, data) {
   if(err) {
     console.log(err);
     res.sendStatus(500);
   } else {
     console.log("get all accesories request performed")
     res.json(data);
   }
 });
});

// app.get('/like', function (req, res) {
//   item.likeSaver(function(err, data) {
//     if(err) {
//       console.log(err);
//       res.sendStatus(500);
//     }
//     else {
//       console.log("get all likes request performed");
//       res.json(data);
//     }
//   });
// });

app.post('/likes', function(req, res) {
 let gustos = req.body.likes;
 console.log("hello",gustos);
 if (!gustos) {
    res.sendStatus(400);
 } else {

   item.insertLikes(gustos, (err, results) => {
     if (err) {
       console.log(err)
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   });
  }
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
   item.insertProduct(name, descrip, price, category, email, vendor, (err, results) => {
     if (err) {
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   });
 }
});



app.listen(3000, function() {
 console.log('listening on port 3000!');
});
