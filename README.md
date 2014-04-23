# Meteor Twitter streaming
With Meteor you can write really cool apps in a few minutes. In this example I'm going to give you a live Twitter feed using the streaming API.

## Installation
You need **Meteor**, **Meteorite**, **Node.js** and **npm** in order to make this example work. Then execute the following command to install its dependencies:
``mrt install``

And afterwards you can run the example using:
``mrt``

Make sure you change the file **private/twitter.json**. You have to register a Twitter application and paste the keys in this file.

## Tutorial
This example is being used in my [tutorial](http://g00glen00b.be/meteor-twitter-streaming). Make sure to check it out.

## Frameworks
A few frameworks are being used in this example. Below you can find a listing of them and the reason why I picked those.

### Meteor
[Meteor](http://meteor.com) is one of a kind, it's the only platform based upon Node.js that integrates both front-end and back-end, in short: it's a full stack JavaScript platform.
With Meteor you can create really cool apps in just a matter of time. For example, this code example contains only 50 lines of HTML and 70 lines of JavaScript.

### Twitter
I'm using the [Twitter package](https://www.npmjs.org/package/twitter) that you can find in the **npm repository** to use the Twitter streaming API in our app.

### Moment.js
[Moment.js](http://momentjs.com) is probably the best date and time manipulation library for JavaScript. In this case I'm using it to format the timestamp available with each tweet.

### Underscore.js
The best utility belt for JavaScript, that's how you could call [Underscore.js](http://underscorejs.org). It provides a lot of tools that make the life of a JavaScript developer much easier.
In this case it's being used to find a specific object inside an array, but Meteor also uses it behind the screens because it's just simply the best.

### Semantic UI
UI libraries like Twitter Bootstrap are totally hot today. I'm personally more a fan of [Semantic UI](http://semantic-ui.com) because I like their naming convention and it has great extra components like the feed component that I use for this app.

### Meteor streams
Meteor's architecture is entirely driven based upon their collections that can be persisted into MongoDB. If you don't need the persistence, you should take a look at the [Meteor streams](http://arunoda.github.io/meteor-streams/) package. I'm using it to stream the tweets to the client.



