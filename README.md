# Tweet from Meteor Demo

This is a barebones app that showcases ways to perform common Twitter actions using the `twitter-api` Atmosphere package for the Meteor framework. It illustrates the following common client-side actions you might need in a Meteor app:

* Searching Tweets
* Searching Users
* Retrieving a User's Home Timeline
* Retrieving a User's Tweet Timeline
* Retrieving a User's Mention Timeline
* Getting a Single User
* Posting a Tweet

(Note: I plan to add examples of streaming by search term, following a User, and favoriting a tweet.)

## To Get Started

For this repo to work, you'll need to install the following Meteor or Atmosphere pacakages:

* standard-app-packages
* streams
* semantic-ui
* momentjs
* underscore
* accounts-ui
* accounts-twitter

To install and run this repo:

```
git clone git@github.com:paulmolluzzo/meteor_twitter_actions.git
cd meteor_twitter_actions
mrt
```

A note about the `twitter-api` package: I'm not using this package available on Atmosphere as it is currently outdated (and non-functional). Instead I'm using a personal fork. To make sure you're running the same version, your `smart.json` file should include:

```
"twitter-api": {
        "git": "https://github.com/paulmolluzzo/meteor-twitter-api.git"
    }
```

Your `smart.lock` should also refer to that GitHub repo.

If you had to manually change your `smart.json` file, run `mrt update twitter-api` afterwards to ensure you have the latest version.

## The Structure of the App

I wrote this app so it's easy to find the HTML/JS for a specific action or method. Below is the file tree.

```
    |____client
    | |____collections.js
    | |____controllers
    | | |____tweets.js
    | | |____users.js
    | |____get_a_user
    | | |____get_a_user.html
    | | |____get_a_user.js
    | |____helpers
    | | |____global-helpers.js
    | |____home_timeline
    | | |____home_timeline.html
    | | |____home_timeline.js
    | |____index.html
    | |____mention_timeline
    | | |____mention_timeline.html
    | | |____mention_timeline.js
    | |____partials
    | | |____header.html
    | | |____home.html
    | | |____not_found.html
    | | |____tweet_loop.html
    | | |____user_loop.html
    | |____post_tweet
    | | |____post_tweet.html
    | | |____post_tweet.js
    | |____routes.js
    | |____search_tweets
    | | |____search_tweets.html
    | | |____search_tweets.js
    | |____search_users
    | | |____search_users.html
    | | |____search_users.js
    | |____user_timeline
    | | |____user_timeline.html
    | | |____user_timeline.js
    |____README.md
    |____server
    | |____server.js
    |____smart.json
    |____smart.lock
```

The HTML and JS for each action is within a single folder. Since this only uses local Collections and reuses the same loop for Users and Tweets, those are in the `partials` folder.

## Pattern for Calling Methods from the Client

Twitter doesn't want you to pass authorization credentials from the client, so we're calling methods from the server, where you'll also have access to the credentials for the User. To accomplish this, we create a `Meteor.method` on the server, and then use `Meteor.call` on the client and pass in any arguments we need to use.

Using search as an example, we'll define `twitter` and create a method:

```
var twitter = new TwitterApi();

Meteor.methods({

    ...

    searchTwitter: function(term) {
        return twitter.search(term);
    },

    ...
})
```

On the client, we'll take some parameters from the submission of a form, and pass them into the `Meteor.call` function:

```
Template.searchTweets.events({
    'submit #search-tweets': function(event) {
        event.preventDefault();
        var term = document.getElementById('search-term').value || "test";
        Meteor.call('searchTwitter', term, function(err, result){
            if(!err){
                console.log(result);
            }
        });
    }
})
```

If you look in this repo's code, you'll see we actually use the `result` to display the tweets that we find, so take a look there for a practical solution.

---------

MIT