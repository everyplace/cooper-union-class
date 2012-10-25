 //Function that gets tweets, taking 3 parameters
 // - searchTerm: What phrase to look for
 // - rpp: Results per page
 // - callback: function to happen after a successful retrieval of tweets
 //Example: tweets = getTweets("Cooper Union", 10);

var tweetUtil = {
	"getTweets" : function(searchTerm, rpp, callback) {
	
	 	//set some defaults
		if(searchTerm === undefined) {
			console.log("searchTerm undefined");
		}

		if(rpp === undefined) {
			console.log("rpp undefined, setting default to 10");
			rpp = 10;
		}

		//construct the url based on the two parameters passed into the function
		var searchUrl = "http://search.twitter.com/search.json?q=" + searchTerm + "&rpp=" + rpp;
		console.log("Search url: "+searchUrl);

		//run the ajax query
		$.ajax({
		
			// our query URL
			url: searchUrl,
			
			// our specified data-type
			dataType:'jsonp',

			// If the Ajax was successful, use its 'response' to our query to create 'localStorage.twitterSearch'. Remember, 
			// 'success:function()'' takes an argument, representing the query's response. We can call it whatever we want: 
			// 'response', 'answer', 'stuffWeAskedFor', etc.
			success:function(response){

				// Create 'localStorage.twitterSearch' by turning the response into a string value.
				// This way, we can work with it as text.
				//localStorage.twitterSearch = JSON.stringify(response);

				//response is the full response object.
				//response.results is just the tweets from the response object.
				//response.results.length is performing the length operation on the results array from the response object.
				console.log("Number of responses:" + response.results.length);

				//use are relatively global tweets variable to store just the tweets from the response.
				//at this point, tweets is an array of tweets.
				tweets = response.results;
				
				//The third optional parameter for this function is a callback function.
				//Test to see if the variable "callback" has been defined, and is a function.
				//If it is a function, execute the function, and pass in the response object just in case the function could take advantage of it.
				if(typeof(callback) === "function") {
					callback(response);
					console.log("The ajax request callback function has been fired.");
				}

			},

			// Send an alert if our Ajax was failed.
			error: function(){
				alert('Error, error: does not compute.');
			}
		
		});	
	}
};
 										