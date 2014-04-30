Template.postTweet.events({
    'submit #post-tweet': function(event) {
        event.preventDefault();
        var tweet = document.getElementById('tweet').value;
        Meteor.call('postTweet', tweet, function(err, result){
            if(!err){
                if (result.statusCode === 200) {
                    console.log(result);
                    var tweetId = result.data.id_str;
                    console.log(tweetId);
                    document.getElementById('body').innerHTML = '<h2>Success!</h2><p><a href="/post_tweet">Post another Tweet</a></p>';
                    Meteor.call('getTweet', tweetId, function(e, r){
                        Tweets.insert(r.data);
                    });                   
                }
            }
        });
    },

    'keyup': function() {
        var tweet = document.getElementById('tweet').value
        var count = 140 - tweet.length;
        var counter = document.getElementById('counter');
        var submitButton = document.getElementById('post');
        var baseClasses = "pull-right label label-default";
        counter.innerHTML = count;
        count < 0 ? submitButton.disabled=true : submitButton.disabled=false;
        if (count <= 10 && counter.className == baseClasses) {
            counter.className = baseClasses + " label-danger";
        }
        if (count > 10) {
            counter.className = baseClasses;
        }
    }
})