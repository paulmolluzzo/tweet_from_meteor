Future = Npm.require('fibers/future');
var Twitter = Meteor.require("twitter");
var conf = JSON.parse(Assets.getText('twitter.json'));
var twit = new Twitter({
	consumer_key: conf.consumer.key,
	consumer_secret: conf.consumer.secret,
	access_token_key: conf.access_token.key,
	access_token_secret: conf.access_token.secret
});

Meteor.methods({
    searchTwitter: function(term) {
        var fut = new Future();

        twit.search(term, function(data) {
            fut['return'](data);
        });

        return fut.wait();
    }
})