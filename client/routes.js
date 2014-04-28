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
        path: '/search',
        template: 'searchTweets'
    });

    this.route('getUser', {
        path: '/get_a_user',
        template: 'getUser'
    });
});


Router.onBeforeAction(function(){
    if (!Meteor.user() && !Meteor.loggingIn()) {
        this.redirect('/');
    }
});