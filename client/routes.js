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
        template: 'searchTweets'
    });

    this.route('getUser', {
        path: '/get_a_user',
        template: 'getUser'
    });

    this.route('searchUsers', {
        path: '/search_users',
        template: 'searchUsers'
    });

    this.route('postTweet', {
        path: '/post_tweet',
        template: 'postTweet'
    });
});


Router.onBeforeAction(function(){
    if (!Meteor.user() && !Meteor.loggingIn()) {
        this.redirect('/');
    }
});