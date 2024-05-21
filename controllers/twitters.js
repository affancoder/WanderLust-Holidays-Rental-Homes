// const passport = require("passport");
// const User = require("../models/user.js");
// const TwitterStrategy = require("passport-twitter").Strategy;
// const express = require('express');
// const session = require('express-session');
// require('dotenv').config();

// passport.use(new TwitterStrategy({
//     consumerKey: process.env.TWITTER_CONSUMER_KEY,
//     consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
//     callbackURL: process.env.TWITTER_CALLBACK_URL,
//   },
//   function(token, tokenSecret, profile, cb) {
//     User.findOrCreate({ twitterId: profile.id }, function (err, user) 
//     {
//       console.log(profile)
//       return cb(err, user);
//     });
//   }
// ));

// module.exports = passport;