
function addTweet() {

	var tweet =	document.getElementById("tweet-input").value;
	//document.getElementById("result").innerHTML = tweet;
//	document.getElementById("result").appendChild(tweet);
	//let newTweetHTML = generateTweetHtml(tweetText);
	// document.getElementById("tweets-list").innerHTML = generateTweetHtml(tweet); 
	let newTweet = generateTweetHtml(tweet);
	let previousTweets = document.getElementById('tweets-list').innerHTML;
	let newStr = newTweet + previousTweets; 
	document.getElementById('tweets-list').innerHTML = newStr; 

}

var tweet =	document.getElementById("tweet-input");
var message = document.getElementById("char-remaining");



function updateCharacterCount() {
	var maxLength = 140; 
	

	 if(tweet.value.length < maxLength) {
        message.innerHTML = (maxLength-tweet.value.length) + " characters remaining";
    }	
	
	//innnerHTML
	
}


function generateTweetHtml(tweetText) {
	return 	`<div class="media">
						<a class="media-left" href="#fake">
							<img alt="" class="media-object img-rounded" src="http://placehold.it/64x64">
						</a>
						<div class="media-body">
							<p>${tweetText}</p>
							<ul class="nav nav-pills nav-pills-custom">
								<li><a href="#"><span class="glyphicon glyphicon-share-alt"></span></a></li>
								<li><a href="#"><span class="glyphicon glyphicon-retweet"></span></a></li>
								<li><a href="#"><span class="glyphicon glyphicon-star"></span></a></li>
								<li><a href="#"><span class="glyphicon glyphicon-option-horizontal"></span></a></li>
							</ul>
						</div>

					</div>`;
}