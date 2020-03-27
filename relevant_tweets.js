require('dotenv').config()  

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/twitters', {useNewUrlParser: true});
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  bearer_token: process.env.TWITTER_BEARER_TOKEN
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var twitterSchema = new mongoose.Schema({
  created_at: String,
  id: Number,
  id_str: String,
  full_text: String,
  entities: String, 
  user: String, 
  geo:  String,
  coordinates: String, 
  fullTweet: String 
});
var Tweet = mongoose.model('Tweets', twitterSchema);


setInterval(()=> {
  console.log("CAll search Api ");
  client.get('search/tweets', {q: 'flooding',geocode:'38.903219,-77.026713,100km',tweet_mode:'extended'}, function(error, tweets, response) {
    console.log("total tweets: ",tweets.statuses.length);  
    tweets.statuses.forEach(function(tweet) {
      if(tweet.geo_enabled ) {
       let newTweet = new  Tweet( {
        created_at: toString( tweet.created_at ),
        id: tweet.id,
        id_str: JSON.stringify(tweet.id_str),
        full_text: (tweet.full_text), 
        entities: JSON.stringify(tweet.entities), 
        user: JSON.stringify(tweet.user),
        geo: JSON.stringify(tweet.geo),
        coordinates: JSON.stringify(tweet.coordinates),
        fullTweet: JSON.stringify(tweet)
      });
      Tweet.find({id:tweet.id}, function (err, docs) {
          if (docs.length){
              console.log("Already in DB", tweet.id);
          }else{
              console.log("Save Tweet", tweet.id);
              newTweet.save(function(err){
                  if(err) {
                    console.log("Failed saving ", err);
                  }
              });
          }
        });
      }
     });
  });
  
  
},400000 );
