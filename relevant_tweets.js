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
let createTweet = new Tweet({});
createTweet.save();

  console.log("Call search Api ");
  setInterval(()=>{
    Tweet.findOne().sort({id_str:-1}).then((docs)=>{  
      console.log("Max Id",docs.id_str);
      if(!docs) { docs = {id_str:"12222220000000"}}
      if(docs) {
        let config = {q: 'flooding',geocode:'38.903219,-77.026713,100km',tweet_mode:'extended', count:100, since_id: docs.id_str};
        console.log(config);
        client.get('search/tweets', config , function(error, tweets, response) {
          if(error) {
            console.log("ERROR", error);
          } else {
            tweets.statuses.forEach(function(tweet) {
              if(tweet.geo_enabled) {
                // console.log(tweet);
                let newTweet = new  Tweet( {
                created_at: tweet.created_at.toString(),
                id: tweet.id,
                id_str: tweet.id_str,
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
          }
          console.log("total tweets: ",tweets.statuses.length);  
          
        });
      }
    
    });
  }, 180000);
  
  