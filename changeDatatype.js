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

Tweet.find({}, function(err,docs) {
  docs.forEach(d=>{
    if(d != null) {
      if(d.created_at){
        console.log("Created at", d.created_at);
        let newcreatedat=  new Date(d.created_at);
        Tweet.updateOne({id:d.id},{created_at: newcreatedat }, function(err, numberAffected, rawResponse) {
          console.log("ERR", err, numberAffected, rawResponse);
        })
        
        }
    }
    
  })
});