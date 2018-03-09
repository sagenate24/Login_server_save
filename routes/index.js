var express = require('express');
var router = express.Router();
var { ensureAuthenticated } = require('./middleWare');

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index');
});


module.exports = router;