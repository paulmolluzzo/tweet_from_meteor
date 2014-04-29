Template.searchTweets.tweets = function() {
	return Tweets.find({}, {
		sort: {
			'created_at': -1
		}
	});
};

Template.searchTweets.isPhoto = function() {
    return this.type === "photo";
};