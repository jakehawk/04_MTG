const {router} = require('express'),
			passport = require('passport');

var {create, me} = require('../controllers/users');

router.route('/api/users')

	// POST a new user
	.post(create);

router.route('/api/me')

	// GET user info while logged in
	.get(token.authenticate, me);

module.exports = router;