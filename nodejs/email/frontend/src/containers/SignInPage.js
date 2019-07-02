import React, { Component } from 'react'
import '../styles/containers/SignInPage.css';
import ScreenBackGround from '../components/ScreenBackGround';
import postman from '../mediator/postman';

class SignInPage extends Component {
	state = {
		email : '',
		password : '',
		regex:/^(?=.*\d).{8,}$/
	}

	onSignClick(){
		postman.post('/user/login',this.state,function(error,response){
			if(!error && response['data']['login']){
				var userDetails = response['data']['_doc'];
				localStorage.setItem("userDetails",JSON.stringify(userDetails));
				this.props.history.push("/mails");
			}else{
				alert(error);
			}
		}.bind(this));
	}

	onChangeHandle(e){
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]:value
		})
	}
	render() {
		return (
				 <ScreenBackGround classes="" position="center">
					<div className="sign_in_group">
					<div className="row row_margin">
					<div className="col-md-12">
						<div className="row row_margin">
							<div className="col-md-12">
								<h3 className="main_header">Light Mail</h3>
								<h4>SignIn to LightMail Account</h4>
							</div>
						</div>
						
						<div className="row row_margin">
						<div className="col-md-12">
							<div className="input-group mb-3">
  								<input type="text" className="form-control sign_in_mail_name_input" placeholder="Username" 
								  aria-label="Username" aria-describedby="basic-addon2" 
								  name="email" value={this.state.email}  onChange={this.onChangeHandle.bind(this)}/>
  								<div className="input-group-append">
	    							<span className="input-group-text sign_in_mail_name" id="">@lightmail.com</span>
  								</div>
							</div>
						</div>
						</div>
						
						<div className="row row_margin">
							<div className="col-md-12">
								<input type="password" className="form-control" id="signup-password" placeholder="Password"
								name="password" value={this.state.password} onChange={this.onChangeHandle.bind(this)}/>
							</div>
						</div>

						<div className="row row_margin">
							<div className="col-md-12">
								<div className="row row_margin" style={{justifyContent: 'space-between'}}>
									<div onClick={()=>this.props.history.push("/signup")} className="sign_in_instead">
										Create Account</div>
									<button type="button" className="btn btn-primary" onClick={this.onSignClick.bind(this)}>
										Sign In
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

export default SignInPage