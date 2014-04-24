Template.tweets.tweets = function() {
	return Tweets.find({}, {
		sort: {
			'created_at': -1
		}
	});
};

Template.tweets.isPhoto = function() {
    return this.type === "photo";
};