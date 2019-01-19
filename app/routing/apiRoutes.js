var friends = require("../data/friends");

module.exports = function (app) {

    app.get('/api/friends', function (request, response) {
        return response.json(friends);
    });

    app.post("/api/friends", function (request, response) {
        var newFriend = request.body;
        friends.push(newFriend);
        // convert the newly inputted scores to numbers
        var newScore = request.body.scores.map(function (i) {
            return parseInt(i, 10)
        });

        var allScores = [];
        var diffs = [];
        var sums = [];

        // loop through friends json response > grab scores > convert them from strings to numbers > push to empty allScores variable
        for (var i = 0; i < friends.length; i++) {
            var scores = friends[i].scores;
            var scoresToNum = scores.map(function (i) {
                return parseInt(i, 10);
            })
            allScores.push(scoresToNum);
        };

        // loop through allScores > subtract each array from the newScore array
        for (var j = 0; j < allScores.length; j++) {

            var differences = allScores[j].map(function (item, index) {
                
                return Math.abs(item - newScore[index]);
            })

            diffs.push(differences);

        };

        // 
        for (var k = 0; k < diffs.length; k++) {
            var added = diffs[k].reduce(add, 0);
            function add(a, b) {
                return a + b;
            }

            sums.push(added);

        }

        var poppedSum = sums.pop()
        var bestFriend = Math.min(...sums)

        function isBestFriend(element) {
            return element == bestFriend;
          }

        var stored = sums.findIndex(isBestFriend);

        var match = friends[stored];


        var bestMatch = {
            name: match.name,
            photo: match.photo
          };
          response.json(bestMatch);

        console.log(match);
        console.log(stored);
        console.log(bestFriend);
        console.log(sums);
        console.log(diffs);
        console.log(allScores);
        console.log("******************");
        console.log(bestMatch.name);

    

    });

};


