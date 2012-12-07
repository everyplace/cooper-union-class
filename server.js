var express = require('express');
var oauth = require('oauth');
var util = require('util');
var twitter = require('twitter');

var app = express();


app.get('/', function(req, res){

	if(req.query['tweetID']) {
		var config = {};
		config.consumer_key = req.query['consumer_key'];
		config.consumer_secret = req.query['consumer_secret'];
		config.access_token_key = req.query['access_token_key'];
		config.access_token_secret = req.query['access_token_secret'];
			
		var twit = new twitter({
			consumer_key: config.consumer_key,
			consumer_secret: config.consumer_secret,
			access_token_key: config.access_token_key,
			access_token_secret: config.access_token_secret
		});
		
		console.log(config);
		
		var tweetID = req.query['tweetID'];
		twit.get('/statuses/retweets/'+tweetID+'.json', {include_entities:true}, function(data) {
			console.log(util.inspect(data));
			res.setHeader('Access-Control-Allow-Origin','*');
			res.send(data);	
		});
	} else {
		console.log("tweetID not present");
		res.send("Please provide the query parameters consumer_key, consumer_secret, access_token_key, access_token_secret and tweetID");
	}	


});



app.listen(parseInt(process.env.PORT || 80));