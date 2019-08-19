import React from 'react';

import PropTypes from 'prop-types';
import Login from '../components/Login';
import {Route,Redirect,withRouter} from 'react-router-dom';

function AuthRoute(props){
	let exact = props.exact ? props.exact : false;
	if(!props.checkAuth){
		return <Route path={props.path} exact={exact} component={props.component}></Route>;
	}else if(props.checkAuth && authenticate()){
		return <Route path={props.path} exact={exact} component={props.component}></Route>;
	}else if(props.checkAuth){
		return <Redirect to={props.redirectTo}></Redirect>;
	}
}

function authenticate(){
	return localStorage.getItem("token") ? true : false;
}

AuthRoute.propTypes = {
	checkAuth : PropTypes.bool,
	exact : PropTypes.bool,
	path : PropTypes.string,
	redirectTo : PropTypes.string,
	component : PropTypes.element.isRequired
};

AuthRoute.defaultProps ={
	checkAuth :true,
	exact:false,
	path:'',
	redirectTo:'/login',
	component:Login
}
export default withRouter(AuthRoute);