// TweetStream = new Meteor.Stream();

// TweetStream.on('tweet', function(tweet) {
// 	tweet.created_at = moment(tweet.created_at).toDate();
// 	console.log(tweet);
// 	Tweets.insert(tweet);
// });

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