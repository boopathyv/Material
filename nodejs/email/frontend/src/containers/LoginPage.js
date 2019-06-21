import React, { Component } from 'react'
import '../styles/containers/LoginPage.css';
import ScreenBackGround from '../components/ScreenBackGround';
import postman from '../mediator/postman';

class LoginPage extends Component {
	state = {
		firstname : '',
		lastname : '',
		email : '',
		password : '',
		gmailId : '',
		passwordConfirm:'',
		showPasswordConfirmation:0,//{0 = display none, 1 = password equals, 2 = password does not match}
		regex:/^(?=.*\d).{8,}$/
	}

	onNextClick(){
		var data = this.state;
		data['gmailId'] = data['gmailId']+'@gmail.com';
		postman.post('/user/signup',this.state,function(error,response){
			this.props.history.push('/mails');
		})
	}

	onChangeHandle(e){
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]:value
		})

		if((name === "passwordConfirm")){
			if(value !== ''){
				if(this.state.password !== value || !this.state.regex.test(value)){
					this.setState({
						showPasswordConfirmation:2
					})	
				}else{
					this.setState({
						showPasswordConfirmation:1
					})	
				}
			}else{
				this.setState({
					showPasswordConfirmation:0
				})	
			}
		}
	}
	render() {
		return (
				<ScreenBackGround classes="" position="center">
						
					<div class="sign_up_group">
					<div class="row row_margin">
					<div class="col-md-8">
						<div class="row row_margin">
							<div class="col-md-12">
								<h3 className="main_header">Light Mail</h3>
								<h4>Create Your LightMail Account</h4>
							</div>
						</div>
						<div class="row row_margin">
							<div class="col-md-6">
								<input type="text" class="form-control" id="first-name" placeholder="First Name"
									name="firstname" value={this.state.firstname} onChange={this.onChangeHandle.bind(this)}/>
							</div>
							<div class="col-md-6">
								<input type="text" class="form-control last_name" id="last-name" placeholder="Last Name"
								name="lastname" value={this.state.lastname}  onChange={this.onChangeHandle.bind(this)}/>
							</div>
						</div>

						<div class="row row_margin">
						<div class="col-md-12">
							<div class="input-group mb-3">
  								<input type="text" class="form-control sign_up_mail_name_input" placeholder="Username" 
								  aria-label="Username" aria-describedby="basic-addon2" 
								  name="email" value={this.state.email}  onChange={this.onChangeHandle.bind(this)}/>
  								<div class="input-group-append">
	    							<span class="input-group-text sign_up_mail_name" id="">@lightmail.com</span>
  								</div>
							</div>
							<div style={{fontSize:'small'}}>You can use letters, numbers & periods</div>
						</div>
						</div>
						
						<div class="row row_margin">
							<div class="col-md-6">
								<input type="password" class="form-control" id="signup-password" placeholder="Password"
								name="password" value={this.state.password} onChange={this.onChangeHandle.bind(this)}/>
							</div>
							<div class="col-md-5">
								<input type="text" class="form-control" id="signup-password-confirm" placeholder="Confirm" 
								name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.onChangeHandle.bind(this)}/>
							</div>
							<div class="col-md-1">
								{this.state.showPasswordConfirmation === 1 ? <div className="fas fa-check-circle password-confirmation-correct"></div>	:
								this.state.showPasswordConfirmation === 2 ? <div className="fas fa-ban password-confirmation-ban"></div>:null}
								
							</div>
							<div style={{fontSize:'small',padding:'16px'}}>Use 8 or more characters with a mix of letters, numbers &amp; symbols</div>
						</div>

						<div class="row row_margin">
						<div class="col-md-12">
							<div class="input-group mb-3">
  								<input type="text" class="form-control sign_up_mail_name_input" placeholder="Gmail Id" 
								  aria-label="Username" aria-describedby="basic-addon2" 
								  name="gmailId" value={this.state.gmailId}  onChange={this.onChangeHandle.bind(this)}/>
  								<div class="input-group-append">
	    							<span class="input-group-text sign_up_mail_name" id="">@gmail.com</span>
  								</div>
							</div>
							<div style={{fontSize:'small'}}>You can use letters, numbers & periods</div>
						</div>
						</div>

						<div class="row row_margin">
							<div class="col-md-12">
								<div class="row row_margin" style={{justifyContent: 'space-between'}}>
									<div onClick={()=>this.props.history.push("/mails")} className="sign_in_instead">
										Sign in instead</div>
									<button type="button" class="btn btn-primary" onClick={this.onNextClick.bind(this)}>
										Next
									</button>
								</div>
							</div>
						</div>
						</div>
						<div class="col-md-4">
							<div className="login_page_image"></div>
						</div>
						</div>
					</div>
				</ScreenBackGround>
		)
	}
}

export default LoginPage