var path = require('path');


module.exports = function (app) {


    // route to home page
    app.get('/', function (request, response) {
        response.sendFile(path.join(__dirname, "../public/home.html"))
    });;

    //route to survey page
    app.get('/survey', function (request, response) {
        response.sendFile(path.join(__dirname, "../public/survey.html"))
    });

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })

};


// var x = a.map(function(item, index) {
//     // In this case item correspond to currentValue of array a, 
//     // using index to get value from array b
//     return Math.abs(item - b[index]);
//   })
//   console.log(x);