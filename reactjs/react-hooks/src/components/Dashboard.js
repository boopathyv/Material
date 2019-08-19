import React,{useContext} from 'react';
import {LoginContext,DashBoardContext} from '../context/ContextApi';

function Dashboard(props){
	const loginTheme = useContext(LoginContext);
	const dashBoardTheme = useContext(DashBoardContext);
	return <div>Welcome to Dashboard.........!!!!!!!!!
		<div>LOGIN_THEME :: {loginTheme.theme}</div>
		<div>DASHBOARD_THEME :: {dashBoardTheme.theme}</div>
		<button onClick={()=>logout(props)}>LOGOUT</button>
	</div>;
}

function logout(props){
	localStorage.removeItem("token");
	props.history.push('/login');
}

export default Dashboard;