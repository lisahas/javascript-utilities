// Import express.js
const express = require("express");

// Create express app
var app = express();


// Add static files location
app.use(express.static("static"));

app.use(express.urlencoded({ extended: true }));

// Use the Pug templating engine
app.set('view engine', 'pug');
app.set('views', './app/views');


// Create a route for root - /
app.get("/", function(req, res) {
    var coords = [
      {lat: -0.1279688, long: 51.5077286 },
      {lat: -0.1299688, long: 51.5097286 },
      {lat: -0.1295688, long: 51.5095286 },
      {lat: -0.1296688, long: 51.5097286 },
    ];
    res.render('index', {coords: coords});
});


// Start server on port 3000
app.listen(3000,function(){
    console.log(`Server running at http://127.0.0.1:3000/`);
});
