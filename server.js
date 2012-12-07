var express = require('express');
var oauth = require('oauth');
var util = require('util');
var twitter = require('twitter');

var app = express();


app.get('/', function(req, res){

	var twit = new twitter({
		consumer_key: req.query['consumer_key'],
		consumer_secret: req.query['consumer_secret'],
		access_token_key: req.query['access_token_key'],
		access_token_secret: req.query['access_token_secret']
	});
	
	var tweetID = req.query['tweetID'];
	twit.get('/statuses/retweets/'+tweetID+'.json', {include_entities:true}, function(data) {
		console.log(util.inspect(data));
		res.send(data);	
	});
	


});



app.listen(parseInt(process.env.PORT || 80));