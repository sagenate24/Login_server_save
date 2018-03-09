function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
        return next();

	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

function unsureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
        res.redirect('/');

	} else {
		//req.flash('error_msg','You are not logged in');
		return next();
	}
}

module.exports = {
    ensureAuthenticated: ensureAuthenticated,
    unsureAuthenticated: unsureAuthenticated
}