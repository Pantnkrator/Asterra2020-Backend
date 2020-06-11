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
  created_at: String,
  id: Number,
  id_str: String,
  full_text: String,
  user: String, 
  geo:  String,
  coordinates: String, 
  place: String
});

var Tweet = mongoose.model('Tweets', twitterSchema);

Tweet.find({}, function(err,docs) {
  docs.forEach(d=>{
    if(d != null) {
      if(d.coordinates){
        let xxx = JSON.parse(d.coordinates);
        if(xxx) {

          if(xxx.coordinates[0] < -77.4 || xxx.coordinates[0] > -76.6 || xxx.coordinates[1] > 39.29) {
            Tweet.remove({id:d.id}, function(err) {
              if (!err) {
                      console.log( 'notification!');
              }
              else {
                      console.log( 'error');
              }
          });
          }
        }
      }
    }
    
  })
});