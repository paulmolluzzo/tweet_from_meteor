var Twitter = Meteor.require("twitter");
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
    searchTwitter: function(token) {
        var TweetStream = new Meteor.Stream(token);
        console.log("made it " + token);
        twit.search('anything', function(data) {
            console.log(token)
            TweetStream.emit(token, data);
        });   
    }
})