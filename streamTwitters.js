require('dotenv').config()  
var Twit = require('twit')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/twitters', {useNewUrlParser: true});

var T = new Twit({
  consumer_key:         process.env.TWITTER_CONSUMER_KEY,
  consumer_secret:       process.env.TWITTER_CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

var stream = T.stream('statuses/sample')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var twitterSchema = new mongoose.Schema({
  created_at: Date,
  id: Number,
  id_str: String,
  full_text: String,
  user: String, 
  geo:  String,
  coordinates: String, 
  place: String
});

var Tweet = mongoose.model('Tweets', twitterSchema);

const longitude1 = -77.255738;
const latitude1 = 38.771216;
const longitude2 = -76.836740;
const latitude2 = 39.014916;
const DC = [longitude1, latitude1, longitude2,latitude2];
var stream = T.stream('statuses/filter', { locations: DC })
const filters = [
  'flooding',
//  'landslide',
//  'wildfire',
   'drought',
  'flood', 
 'inundation', 
  'inundación', 
  'inundacion', 
  'deluge', 
   'torrent', 
   'flash flood', 
   'downpour', 
   'torrent', 
   'overflow'
];
console.log("STARTING TWEETS STREAM");
stream.on('tweet', function (tweet) {
  console.log("Tweet enters", tweet.text);
  if(tweet.geo || tweet.coordinates) {
//     if ( tweet.text.includes(filters[0]) || tweet.text.includes(filters[1]) || tweet.text.includes(filters[2]) || tweet.text.includes(filters[3]) || tweet.text.includes(filters[4])  || tweet.text.includes(filters[5]) || tweet.text.includes(filters[6]) || tweet.text.includes(filters[7]) || tweet.text.includes(filters[8]) || tweet.text.includes(filters[9])
//  || tweet.text.includes(filters[10]) || tweet.text.includes(filters[11])   ) {
      console.log("\n \n \n COORDINATES of twit"+tweet.text+'\n \n \n');
      insertTwitter(tweet);
    // } 
  }  
});


function insertTwitter (tweet) {
  let newTweet = new  Tweet( {
    created_at: new Date(tweet.created_at.toString()),
    id: tweet.id,
    id_str: tweet.id_str,
    full_text: (tweet.text), 
    user: JSON.stringify(tweet.user),
    geo: JSON.stringify(tweet.geo),
    coordinates: JSON.stringify(tweet.coordinates),
    place:JSON.stringify(tweet.place)
  });
  newTweet.save(function(err){
    console.log("SAVED INTO MONGO");
	if(err) {
      console.log("Failed saving ", err);
    }
  });

}
