var express = require('express');
var router = express.Router();

  function getVideos(id, type, callback) {

    var https = require('https');

    var opts = {

          host: "mariokart.tv",
          path: "/en_us/jsonapi/videos?course_id=" + id + "&mode_id=" + type

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

module.exports = function(req, res) {

  var courseId = req.params.courseId;
  var videoType = req.params.typeId;

  getVideos(courseId, videoType, function() {

    var videos = arguments[0].video_posts;

    res.render('videos', { title: 'Express', videos: videos });

  });

};
