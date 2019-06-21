import React, { Component } from 'react'
import '../styles/containers/SignInPage.css';
import ScreenBackGround from '../components/ScreenBackGround';
import postman from '../mediator/postman';

class SignUpPage extends Component {
	state = {
		email : '',
		password : '',
		regex:/^(?=.*\d).{8,}$/
	}

	onNextClick(){
		
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
					<div class="col-md-12">
						<div class="row row_margin">
							<div class="col-md-12">
								<h3 className="main_header">Light Mail</h3>
								<h4>SignIn to LightMail Account</h4>
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
						</div>
						</div>
						
						<div class="row row_margin">
							<div class="col-md-12">
								<input type="password" class="form-control" id="signup-password" placeholder="Password"
								name="password" value={this.state.password} onChange={this.onChangeHandle.bind(this)}/>
							</div>
						</div>

						<div class="row row_margin">
							<div class="col-md-12">
								<div class="row row_margin" style={{justifyContent: 'space-between'}}>
									<div onClick={()=>this.props.history.push("/signup")} className="sign_in_instead">
										Create Account</div>
									<button type="button" class="btn btn-primary" onClick={this.onNextClick.bind(this)}>
										Next
									</button>
								</div>
							</div>
						</div>
						</div>
						</div>

						<div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
							<div className="signin_page_image"></div>
						</div>
					</div>
				</ScreenBackGround> 
		)
	}
}

export default SignUpPage