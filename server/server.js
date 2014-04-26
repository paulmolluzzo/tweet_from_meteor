var twitter = new TwitterApi();

// var conf = JSON.parse(Assets.getText('twitter.json'));

// Meteor.startup(function() {
//   Accounts.loginServiceConfiguration.remove({
//     service: "twitter"
//   });
//   Accounts.loginServiceConfiguration.insert({
//     service: "twitter",
//     consumerKey: conf.consumer.key,
//     secret: conf.consumer.secret
//   });
// });

// Future = Npm.require('fibers/future');
// var Twitter = Meteor.require("twitter");
// var twit = new Twitter({
// 	consumer_key: conf.consumer.key,
// 	consumer_secret: conf.consumer.secret,
// 	access_token_key: conf.access_token.key,
// 	access_token_secret: conf.access_token.secret
// });

Meteor.methods({
    searchTwitter: function(term) {
        var fut = new Future();

        twit.search(term, function(data) {
            fut['return'](data);
        });

        return fut.wait();
    },

    getUser: function (term) {
        var fut = new Future();

        twit.get('/users/show.json', {screen_name: term}, function(data) {
                fut['return'](data);
        });

        return fut.wait();
    },

    getTest: function(id, term) {
        console.log(twit.options.access_token_key);
        twit.options.access_token_key = Meteor.users.findOne({_id: id}).services.twitter.accessToken;

        twit.options.access_token_secret = Meteor.users.findOne({_id: id}).services.twitter.accessTokenSecret;

        console.log(twit);

        var fut = new Future();

        twit.get('/users/show.json', {screen_name: term}, function(data) {
                fut['return'](data);
        });

        return fut.wait();
    },

    newTest: function(term) {
        return twitter.get('users/show.json',{screen_name: term})
    }
})