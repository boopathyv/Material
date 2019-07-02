import React, { Component } from 'react'
import postman from '../mediator/postman';

class AccountVerification extends Component {

	componentDidMount(){
		localStorage.setItem('x-access-token',this.props.match.params.id);
		postman.get('/user/verifyAccount',{},function(error,response){
			if(!error && response['data']['verified']){
				this.props.history.push("/signin");
			}else{
				alert(error);
				this.props.history.push("/verificationLink");
			}
		}.bind(this));
	}

	render() {
		return (
			<></>
		)
	}
}

export default AccountVerification
