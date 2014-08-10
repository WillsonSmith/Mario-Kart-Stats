var express = require('express');
var router = express.Router();

var courseIds = require('./courseIds.js');
var baseTimeTrialUrl = "https://mariokart.tv/en_us/jsonapi/time_trials?category_id=";
var baseVideoUrl = "https://mariokart.tv/en_us/jsonapi/videos?";
var videoArs = "mode=&mode_id=&course_id=&character_id=&offset=";

var https = require('https');

var count = 0;

var items = [];

/*function getForRace(id, name, res) {

  var body = "",
      opts = {

        host: "mariokart.tv",
        path: "/en_us/jsonapi/videos?course_id=" + id

      };
      https.request(opts, function(results) {
      //https.get("https://" + opts.host + opts.path, function handleResults(results) {

        results.on('data', function addChunk(chunk) {

          body += chunk;

        });

        results.on('error', function(err) {

          console.log(err);

        });

        results.on('end', function returnResults() {

          var data = JSON.parse(body);
          items.push(data);
          count++;

          if (count === 4) {

            res.render('index', { title: 'Express', data: items });

          }

        });

    }).end();

}*/
/* GET home page. */
router.get('/', function(req, res) {
  count = 0;
  items = [];

  /*for (var i in courseIds["Mushroom Cup"]) {

    getForRace(courseIds["Mushroom Cup"][i], i, res);

  }*/

  //}

  //res.render('index', { title: 'Express' });
});

module.exports = router;
