var secrets = require('../config/secrets');
var User = require('../models/User');
var querystring = require('querystring');
var async = require('async');
var cheerio = require('cheerio');
var request = require('request');
var _ = require('underscore');
var graph = require('fbgraph');

/**
 * GET /api/facebook
 * Facebook API example.
 */

exports.getFacebook = function(req, res, next) {
  var token = _.findWhere(req.user.tokens, { kind: 'facebook' });
  graph.setAccessToken(token.accessToken);
  async.parallel({
    getMe: function(done) {
      graph.get(req.user.facebook, function(err, me) {
        done(err, me);
      });
    },
    getMyFriends: function(done) {
      graph.get(req.user.facebook + '/friends', function(err, friends) {
        done(err, friends.data);
      });
    },
    getMyPhotos: function(done) {
      graph.get(req.user.facebook + '/photos', function(err, photos1) {
      photos1 = {
      "data": [
      {
        "source": "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-ash2/t1/s720x720/196971_10200357230679304_543780914_n.jpg", 
        "id": "10200357230679304", 
        "created_time": "2013-01-03T04:18:28+0000"
      }, 
      {
        "source": "https://scontent-b.xx.fbcdn.net/hphotos-frc3/t1/s720x720/309315_10200339947847244_651573396_n.jpg", 
        "id": "10200339947847244", 
        "created_time": "2012-12-31T16:41:47+0000"
      }, 
      {
        "source": "https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-ash2/t1/s720x720/546234_10200336788488262_1026640991_n.jpg", 
        "id": "10200336788488262", 
        "created_time": "2012-12-31T01:34:09+0000"
      }, 
      {
        "source": "https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-frc3/t1/s720x720/205036_10200250640334612_1159119653_n.jpg", 
        "id": "10200250640334612", 
        "created_time": "2012-12-15T22:49:44+0000"
      }, 
      {
        "source": "https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-prn1/t1/s720x720/67981_10200245526886779_38252534_n.jpg", 
        "id": "10200245526886779", 
        "created_time": "2012-12-14T22:34:17+0000"
      }, 
      {
        "source": "https://scontent-a.xx.fbcdn.net/hphotos-ash2/t1/s720x720/533518_10200240405358744_988169189_n.jpg", 
        "id": "10200240405358744", 
        "created_time": "2012-12-13T21:59:42+0000"
      }, 
      {
        "source": "https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-ash3/t1/s720x720/531781_10200232823369199_1799518499_n.jpg", 
        "id": "10200232823369199", 
        "created_time": "2012-12-12T09:11:13+0000"
      }, 
      {
        "source": "https://scontent-a.xx.fbcdn.net/hphotos-frc1/t1/s720x720/268306_10200225796633535_875323342_n.jpg", 
        "id": "10200225796633535", 
        "created_time": "2012-12-10T21:39:26+0000"
      }, 
      {
        "source": "https://scontent-b.xx.fbcdn.net/hphotos-frc3/t1/s720x720/479727_10200300683339343_1253591751_n.jpg", 
        "id": "10200300683339343", 
        "created_time": "2012-12-10T08:36:53+0000"
      }, 
      {
        "source": "https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-frc3/t1/s720x720/28752_10200253913930137_1661764292_n.jpg?lvh=1", 
        "id": "10200253913930137", 
        "created_time": "2012-12-02T03:51:49+0000"
      }, 
      {
        "source": "https://scontent-b.xx.fbcdn.net/hphotos-prn1/t1/s720x720/16226_10200253864088891_608212375_n.jpg", 
        "id": "10200253864088891", 
        "created_time": "2012-12-02T03:42:46+0000"
      }, 
      {
        "source": "https://scontent-a.xx.fbcdn.net/hphotos-ash3/t1/s720x720/547034_10200145787513357_1050405347_n.jpg", 
        "id": "10200145787513357", 
        "created_time": "2012-11-25T03:19:52+0000"
      }, 
      {
        "source": "https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-prn1/t1/s720x720/231127_10200166867794038_1203363450_n.jpg", 
        "id": "10200166867794038", 
        "created_time": "2012-11-15T07:36:49+0000"
      }, 
      {
        "source": "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-ash2/t1/s720x720/293720_10200142694109711_1637086324_n.jpg", 
        "id": "10200142694109711", 
        "created_time": "2012-11-11T03:19:00+0000"
      }, 
      {
        "source": "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-prn1/t1/s720x720/263522_10200142690469620_581400466_n.jpg", 
        "id": "10200142690469620", 
        "created_time": "2012-11-11T03:17:42+0000"
      }, 
      {
        "source": "https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-ash3/t1/s720x720/534127_10200142681349392_2071253194_n.jpg", 
        "id": "10200142681349392", 
        "created_time": "2012-11-11T03:15:03+0000"
      }, 
      {
        "source": "https://scontent-b.xx.fbcdn.net/hphotos-prn1/t1/s720x720/75664_457196797658665_352117511_n.jpg", 
        "id": "457196797658665", 
        "created_time": "2012-09-26T01:45:33+0000"
      }, 
      {
        "source": "https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-ash3/t1/s720x720/564689_4803677369452_1104246992_n.jpg", 
        "id": "4803677369452", 
        "created_time": "2012-09-26T01:34:14+0000"
      }, 
      {
        "source": "https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-ash3/t1/s720x720/578463_4788980002027_876281399_n.jpg", 
        "id": "4788980002027", 
        "created_time": "2012-09-23T01:33:39+0000"
      }, 
      {
        "source": "https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-frc3/t1/376560_4787985817173_46398710_n.jpg", 
        "id": "4787985817173", 
        "created_time": "2012-09-22T20:38:55+0000"
      }, 
      {
        "source": "https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-frc1/t1/s720x720/578409_4787918655494_211585966_n.jpg", 
        "id": "4787918655494", 
        "created_time": "2012-09-22T20:20:31+0000"
      }, 
      {
        "source": "https://scontent-b.xx.fbcdn.net/hphotos-frc3/t1/s720x720/404715_411604955555926_498617353_n.jpg", 
        "id": "411604955555926", 
        "created_time": "2012-09-22T16:19:36+0000"
      }, 
      {
        "source": "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-frc3/t1/s720x720/487491_4711873078794_1906277367_n.jpg", 
        "id": "4711873078794", 
        "created_time": "2012-09-14T00:48:08+0000"
      }, 
      {
        "source": "https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-ash3/t1/549466_4644578358389_199491764_n.jpg", 
        "id": "4644578358389", 
        "created_time": "2012-09-06T04:37:01+0000"
      }, 
      {
        "source": "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-frc3/t1/s720x720/387027_4601200193962_804700136_n.jpg", 
        "id": "4601200193962", 
        "created_time": "2012-08-28T19:42:03+0000"
      }
    ], 
    "paging": {
      "previous": "https://graph.facebook.com/1411037757/photos?type=tagged&limit=25&fields=source&since=1357186708", 
      "next": "https://graph.facebook.com/1411037757/photos?type=tagged&limit=25&fields=source&until=1346182922"
    }
  }

        console.log(photos1.data);
        done(err, photos1.data);
      });  
    }
  },
  function(err, results) {
    if (err) return next(err);
    res.render('api/facebook', {
      title: 'Facebook API',
      me: results.getMe,
      friends: results.getMyFriends,
      photos: results.getMyPhotos
    });
  });
};

