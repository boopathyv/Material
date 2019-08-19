import React, { Component } from 'react'
import { LoginContext } from '../context/ContextApi';
import ErrorBoundary from '../Error/ErrorBoundary';

export class Login extends Component {
	onClickLogin(){
		localStorage.setItem("token","token");
		this.props.history.push("/dashboard");
	}

	render() {
		return (<ErrorBoundary>
				<div>
					<div>Login Theme :: {this.context.theme}</div>
					<button onClick={()=>this.onClickLogin()}>LOGIN</button>
				</div>
				</ErrorBoundary>
		)
	}
}
Login.contextType = LoginContext;
export default Login


// import React from 'react';
// 
// function Login(props){
	// return <div><button onClick={()=>onClickLogin(props)}>LOGIN</button></div>;
// }
// 
// function onClickLogin(props){
	// localStorage.setItem("token","token");
	// props.history.push("/dashboard");
// }
// 
// export default Login;