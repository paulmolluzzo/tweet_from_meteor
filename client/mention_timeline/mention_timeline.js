Template.mentionTimeline.rendered = function(){
    Meteor.call('mentionTimeline', function(err, result){
        if(!err){
            if (result.statusCode === 200) {
                console.log(result);
                result.headers.date = moment(result.headers.date).toDate();
                for (var i=0; i < result.data.length; i++) {
                    console.log(result.data);
                    Tweets.insert(result.data[i]);  
                }
                console.log("done");
            }
        }
    });
    return Tweets.find({});
}