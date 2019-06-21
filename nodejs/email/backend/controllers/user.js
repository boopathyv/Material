'use strict';
const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const { verifyAccessToken } = require('../middleware/verifyAccessToken');
const { verifyRefreshToken } = require('../middleware/verifyRefreshToken');
const { getAccessToken } = require('../utils/getToken');
const { isUserVerified } = require('../middleware/isUserVerified');
const {mailAuthentication,getAuthenticationId} = require('../utils/mailer');

router.post('/signup', async (req, res) => {
	const firstname = req.body.firstname;
	const lastname = req.body.lastname;
	const email = req.body.email;
	const password = req.body.password;
	const gmailId = req.body.gmailId;

	if (!firstname || !lastname || !email || !password || !gmailId) {
		return res.json({ error: 'insufficient data' });
	}

	let userRefreshToken;
	let authenticationId = getAuthenticationId();
	let newUser = new User({firstname:firstname,
		lastname:lastname,email:email,
		password:password,gmailId:gmailId,
		authenticationId:authenticationId});
	newUser
		.createSession(req)
		.then(refreshToken => {
			userRefreshToken = refreshToken;
			return newUser.generateAccessToken();
		})
		.then(userAccessToken => {
			mailAuthentication(authenticationId,gmailId,
				function (error, info) {
					if(error){
						res.json({ error: error.message });
					}else{
						res.header('x-refresh-token', userRefreshToken)
							.header('x-access-token', userAccessToken)
							.send(newUser);
					}
			});		
		}).catch(error => {
			res.json({ error: error.message });
		});
});

router.post('/login', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	if (!email || !password) {
		return res.json({ error: 'insufficient data' });
	}

	let userRefreshToken;
	let currentUser;
	User.findByCredentials(email, password)
		.then(user => {
			currentUser = user;
			return User.findOrCreateSession(req, email, currentUser);
		})
		.then(refreshToken => {
			userRefreshToken = refreshToken;
			return currentUser.generateAccessToken();
		})
		.then(userAccessToken => {
			res
				.header('x-refresh-token', userRefreshToken)
				.header('x-access-token', userAccessToken)
				.send(currentUser);
		})
		.catch(error => {
			res.json({ error: error.message });
		});
});

router.get(
	'/getaccesstoken',
	verifyRefreshToken,
	isUserVerified,
	(req, res) => {
		const id = req.user_id;
		const accessToken = getAccessToken(id);
		res.header('x-access-token', accessToken).send({ user_id: id });
	}
);

router.post('/deletetoken', verifyAccessToken, isUserVerified, (req, res) => {
	const sessionDocId = req.body.sessionid;
	const user = req.user;

	if (!sessionDocId) {
		return res.json({ error: 'insufficient data' });
	}
	try {
		user.sessions.id(sessionDocId).remove();
		user.save().then(user => {
			res.json({ user: user });
		});
	} catch (e) {
		res.json({ error: e.message });
	}
});

router.get('/gettokens', verifyAccessToken, isUserVerified, (req, res) => {
	const id = req.user_id;
	User.findOne({ _id: id })
		.then(user => {
			res.json({ sessions: user.sessions });
		})
		.catch(error => {
			res.json({ error: error.message });
		});
});

module.exports = router;