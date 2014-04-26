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
        return twitter.search(term);
    },

    getUser: function (term) {
        return twitter.get('users/show.json', {screen_name: term});
    },

    newTest: function(term) {
        return twitter.get('/users/show.json',{screen_name: term})
    }
})