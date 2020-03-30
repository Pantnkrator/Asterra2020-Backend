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
  user: String, 
  geo:  String,
  coordinates: String, 
  place: String
});
var twitterExtra = new mongoose.Schema({
	twitterfull: String
});
var Tweet = mongoose.model('Tweets', twitterSchema);
var TweetFull = mongoose.model('tweetsFull', twitterExtra);

let createTweet = new Tweet({
	id_str:"1"
});
let firsttime = true; 
createTweet.save();

  console.log("Call search Api ");
  // setInterval(()=>{
    if(firsttime ) {
      firsttime = false;
         let i = 1243209989845156900;
      let intvl = setInterval( () => {
        i = i+9000;
        let config = {q: 'flooding',geocode:'38.903219,-77.026713,100km',tweet_mode:'extended', count:10000};
        config['max_id'] = i;
        searchInClient(config);
        if( i >= 1244018232740000000 ){
          clearInterval(intvl);
        }
      },5000);
    }
      
    let intvl2 = setInterval(()=>{ 
      Tweet.findOne().sort({id_str:-1}).then((docs)=>{  
	
        if(!docs) { docs = {id_str:"1"}}
        console.log("Since Id", docs.id_str);
        if(docs) {
          let config = {q: 'flooding',geocode:'38.903219,-77.026713,100km',tweet_mode:'extended', count:10000};
          if(docs.id_str!='1') {
            config['since_id']=docs.id_str;
          }
          console.log(config);
          searchInClient(config);
        }
      });
    }, 40000);
    
  // }, 180000);
  
  
function searchInClient (config) {
	console.log("config", config);
  client.get('search/tweets', config , function(error, tweets, response) {
    if(error) {
      console.log("ERROR", error);
    } else {
      tweets.statuses.forEach(function(tweet) { 
	console.log(tweet.id_str, tweet.user.geo_enabled,tweet.geo, tweet.coordinates,tweet.place );        

if(tweet.user.geo_enabled || tweet.geo || tweet.place || tweet.coordinates) {
		let tweetFull = new TweetFull( { twitterfull: JSON.stringify(tweet)});
	tweetFull.save();

          let newTweet = new  Tweet( {
          created_at: tweet.created_at.toString(),
          id: tweet.id,
          id_str: tweet.id_str,
          full_text: (tweet.full_text), 
          user: JSON.stringify(tweet.user),
          geo: JSON.stringify(tweet.geo),
          coordinates: JSON.stringify(tweet.coordinates),
	  place:JSON.stringify(tweet.place)
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
