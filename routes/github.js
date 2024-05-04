const express = require("express");
const router = express.Router();
const passport = require("../controllers/githubs.js");
const app = express();

app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

module.exports = router;