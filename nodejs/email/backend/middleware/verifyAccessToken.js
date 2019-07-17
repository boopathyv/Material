'use strict';
const jwt = require('jsonwebtoken');
const { verifyRefreshToken } = require('./verifyRefreshToken');

const verifyAccessToken = (req, res, next) => {
	const token = req.header('x-access-token');
	const refreshToken = req.header('x-refresh-token');
	const secret = process.env.accessTokenSecret;
	jwt.verify(token, secret, (err, decoded) => {
		if (err) {
			if(refreshToken){
				verifyRefreshToken(req,res,next);
			}else{
				return res.json({ error: 'invalid token' });
			}
		} else {
			req.user_id = decoded._id;
			next();
		}
	});
};

module.exports = {
	verifyAccessToken
};