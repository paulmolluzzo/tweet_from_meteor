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

Template.postTweet.tweet = function() {
    return Tweets.findOne({});
};

Template.homeTimeline.tweets = function() {
    return Tweets.find({}, {
        sort: {
            'created_at': -1
        }
    });
};

Template.homeTimeline.isPhoto = function() {
    return this.type === "photo";
};

Template.userTimeline.tweets = function() {
    return Tweets.find({}, {
        sort: {
            'created_at': -1
        }
    });
};

Template.userTimeline.isPhoto = function() {
    return this.type === "photo";
};

Template.mentionTimeline.tweets = function() {
    return Tweets.find({}, {
        sort: {
            'created_at': -1
        }
    });
};

Template.mentionTimeline.isPhoto = function() {
    return this.type === "photo";
};