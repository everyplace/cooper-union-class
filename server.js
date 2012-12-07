var express = require('express');
var oauth = require('oauth');
var util = require('util');
var twitter = require('twitter');

var app = express();

var twit = new twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

app.get('/' function(req, res){
	
	var tweetID = req.query['tweetID'];
	twit.get('/statuses/retweets/'+tweetID+'.json', {include_entities:true}, function(data) {
		console.log(util.inspect(data));
		res.send(twitterResponse);	
	});
	


});



app.listen(parseInt(process.env.PORT || 80));