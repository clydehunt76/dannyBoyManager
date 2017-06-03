var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("Rendering root");
    res.render('pages/login', {
        title: 'Express'
    });
});

module.exports = router;
