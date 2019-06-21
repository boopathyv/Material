const nodemailer = require('nodemailer');


function mailAuthentication(authenticationId,receiverAddress,cb){
	var transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		secure: false,
		requireTLS: true,
		auth: {
			   user: 'boopathysanthosh777@gmail.com',
			   pass: '21131115'
		}
	});
	
	const mailOptions = {
		from: 'boopathysanthosh777@gmail.com',
		to: receiverAddress,
		subject: 'LightMail Authentication',
		html: '<div> <h1>HI !!!</h1> '+
				'<h3>Kindly use this AuthenticationId </h3><h1>'+
				authenticationId+'<h1><h3> for registering</h3>'+
				'</div>'
	};
	
	  return transporter.sendMail(mailOptions,cb);
}

function getAuthenticationId(){
	return new Date().getTime();
}

module.exports = {mailAuthentication,getAuthenticationId};