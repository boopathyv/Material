import React,{Component} from 'react';

import SignUpPage from './containers/SignUpPage';
import SignInPage from './containers/SignInPage';

import Mails from './containers/Mails';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import AccountVerification from './containers/AccountVerification';

class App extends Component {

	state = {
		login : false
	}

	onClickHandle(params) {
		this.setState({login:!this.state.login});
	}
  
    render(){
		return (
			<Router>
				<Switch>
					<Redirect exact from="/" to="/signup" component={SignUpPage}></Redirect>
					<Route path="/verificationLink" exact render={()=>{
						return <div>
							<h1>Account Verification</h1>
							<h3>Kindly Check your mail for Verification</h3>
							<a href="https://mail.google.com/">Click Here</a>
						</div>
					}}></Route>

					<Route path="/verifyAccount/:id" exact component={AccountVerification}></Route>

					<div className="light_mail">
					{/* {
						!this.state.login?
						<Redirect to="/signup"></Redirect>
						:	
						<Redirect to="/mails"></Redirect>
					} */}
					<Route path="/signup"  component={SignUpPage}></Route>
					<Route path="/signin"  component={SignInPage}></Route>
					<Route path="/mails"  component={Mails}></Route>
	   				</div>
				</Switch>
			</Router>
		);
	};
}

export default App;
