Template.tweetLoop.tweets = function() {
	return Tweets.find({});
};

Template.tweetLoop.isPhoto = function() {
    return this.type === "photo";
};