var Twitter = Meteor.require("twitter");
var TweetStream = new Meteor.Stream('tweets');
var conf = JSON.parse(Assets.getText('twitter.json'));
var twit = new Twitter({
	consumer_key: conf.consumer.key,
	consumer_secret: conf.consumer.secret,
	access_token_key: conf.access_token.key,
	access_token_secret: conf.access_token.secret
});

// twit.stream('statuses/filter', {
// 	'track': conf.hashtag
// }, function(stream) {
// 	stream.on('data', function(data) {
// 		TweetStream.emit('tweet', data);
// 	});
// });

Meteor.methods({
    searchTwitter: function() {
        console.log("made it");
        twit.search('anything', function(data) {
            TweetStream.emit('tweet', data);
        });
    }
})