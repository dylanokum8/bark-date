const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET Login Index page. */
router.get('/', function(req, res) {
    res.render('index');
});

/* POST Validate the user login */
router.post('/validate', passport.authenticate('local', { failureRedirect: '/' }),
    function(req, res) {
        res.redirect('/main');
    });

module.exports = router;