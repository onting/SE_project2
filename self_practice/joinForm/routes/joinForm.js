var express = require('express');
var router = express.Router();

/*GET users listning */
router.get('/', function(req, res, next) {
    res.render('joinForm', {title: 'Join Form!'});
});

module.exports = router;