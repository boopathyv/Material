import React, { Component } from 'react'
import '../styles/containers/LoginPage.css';
import ScreenBackGround from '../components/ScreenBackGround';

class LoginPage extends Component {

	onClickHandle(){
		this.props.history.push('/mails');
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
								<input type="text" class="form-control" id="first-name" placeholder="First Name"/>
							</div>
							<div class="col-md-6">
								<input type="text" class="form-control last_name" id="last-name" placeholder="Last Name"/>
							</div>
						</div>

						<div class="row row_margin">
						<div class="col-md-12">
							<div class="input-group mb-3">
  								<input type="text" class="form-control sign_up_mail_name_input" placeholder="Username" aria-label="Username" aria-describedby="basic-addon2"/>
  								<div class="input-group-append">
	    							<span class="input-group-text sign_up_mail_name" id="">@lightmail.com</span>
  								</div>
							</div>
							<div style={{fontSize:'small'}}>You can use letters, numbers & periods</div>
						</div>
						</div>
						
						<div class="row row_margin">
							<div class="col-md-6">
								<input type="text" class="form-control" id="signup-password" placeholder="Password"/>
							</div>
							<div class="col-md-6">
								<input type="text" class="form-control" id="signup-password-confirm" placeholder="Confirm"/>
							</div>
							<div style={{fontSize:'small',padding:'16px'}}>Use 8 or more characters with a mix of letters, numbers &amp; symbols</div>
						</div>
						<div class="row row_margin">
							<div class="col-md-12">
								<div class="row row_margin" style={{justifyContent: 'space-between'}}>
									<div onClick={()=>this.props.history.push("/mails")} className="sign_in_instead">
										Sign in instead</div>
									<button type="button" class="btn btn-primary" onClick={()=>this.props.history.push("/mails")}>Next</button>
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