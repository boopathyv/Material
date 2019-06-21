const nodemailer = require('nodemailer');


function mailAuthentication(authenticationId,receiverAddress,cb){
	var transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		secure: false,
		requireTLS: true,
		auth: {
			   user: 'lightmail.team@gmail.com',
			   pass: 'Qwer@123'
		}
	});
	
	const mailOptions = {
		from: 'lightmail.team@gmail.com',
		to: receiverAddress,
		subject: 'LightMail Authentication',
		html: '<div> <h1>HI !!!</h1> '+
				'<h3>Click the below link to verify your Account </h3><h1>'+
				'<a href="http://localhost:3000/verifyAccount/'+authenticationId+'">Account Verification Link</a>'+
				'</div>'
	};
	
	  return transporter.sendMail(mailOptions,cb);
}

function getAuthenticationId(){
	return new Date().getTime();
}

module.exports = {mailAuthentication,getAuthenticationId};