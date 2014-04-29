Template.searchTweets.tweets = function() {
	return Tweets.find({});
};

Template.searchTweets.isPhoto = function() {
    return this.type === "photo";
};

Template.postTweet.tweet = function() {
    return Tweets.findOne({});
};

Template.homeTimeline.tweets = function() {
    return Tweets.find({});
};

Template.homeTimeline.isPhoto = function() {
    return this.type === "photo";
};

Template.userTimeline.tweets = function() {
    return Tweets.find({});
};

Template.userTimeline.isPhoto = function() {
    return this.type === "photo";
};

Template.mentionTimeline.tweets = function() {
    return Tweets.find({});
};

Template.mentionTimeline.isPhoto = function() {
    return this.type === "photo";
};