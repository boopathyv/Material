import React,{Component} from 'react';

import LoginPage from './containers/LoginPage';
import Mails from './containers/Mails';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';

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
					<Redirect exact from="/" to="/signup" component={LoginPage}></Redirect>
					<div className="light_mail">
					{
						!this.state.login?
						<Redirect to="/signup"></Redirect>
						:	
						<Redirect to="/mails"></Redirect>
					}
					<Route path="/signup"  component={LoginPage}></Route>
					<Route path="/mails"  component={Mails}></Route>
	   				</div>
				</Switch>
			</Router>
		);
	};
}

export default App;
