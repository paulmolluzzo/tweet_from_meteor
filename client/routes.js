Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    yieldTemplates:{
        header:{to:'header'}
    }
});

Router.map(function () {
    this.route('home', {
        path: '/'
    });

    this.route('searchTweets', {
        path: '/search_tweets',
        template: 'searchTweets',
        onBeforeAction: function(){
            Tweets.remove({});
        }
    });

    this.route('getUser', {
        path: '/get_a_user',
        template: 'getUser',
        onBeforeAction: function(){
            Users.remove({});
        }
    });

    this.route('searchUsers', {
        path: '/search_users',
        template: 'searchUsers',
        onBeforeAction: function(){
            Users.remove({});
        }
    });

    this.route('postTweet', {
        path: '/post_tweet',
        template: 'postTweet',
        onBeforeAction: function(){
            Tweets.remove({});
        }
    });
});


Router.onBeforeAction(function(){
    if (!Meteor.user() && !Meteor.loggingIn()) {
        this.redirect('/');
    }
});