var express = require('express');
var router = express.Router();

  function getTimeTrial(id, callback) {

    var https = require('https');

    var opts = {

      host: "mariokart.tv",
      path: "/en_us/jsonapi/time_trials?category_id=" + id

    };

    https.request(opts, function(res) {
      var body = "";

      res.on('data', function addChunk(chunk) {

        body += chunk;

      });

      res.on('error', function (err) {

        console.log(err);

      });

      res.on('end', function (chunk) {

        var data = JSON.parse(body);

        callback.call(this, data);

      });

    }).end();

  }

/* GET time trials. */
/*router.get('/', function(req, res) {

  var query = req.params.courseId;

  console.log(query);

  res.send('respond with a resource');
});*/

module.exports = function(req, res) {

  var query = req.params.courseId;

  getTimeTrial(query, function() {
    var topRanks = arguments[0].top_rankers;
    var name = arguments[0].course_name;

    console.log(topRanks);
    res.render('time-trials', { title: 'Express', courseName: name, data: topRanks });

  });

};
