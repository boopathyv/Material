import React,{lazy,Suspense} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AuthRoute from './router/AuthRoute';
import {LoginContext,DashBoardContext} from './context/ContextApi';
import './App.css';

const Login = lazy(() => import('./components/Login'));
const Dashboard = lazy(() => import('./components/Dashboard'));


function App() {
  return (
	  	<Router>
	  		<Suspense fallback={<div>LoadingLoadingLoadingLoadingLoadingLoadingLoadingLoading...</div>}>
			  	<LoginContext.Provider value={{'theme':'blue'}}>
					<DashBoardContext.Provider value={{'theme':'skyblue'}}>
						<AuthRoute path="/" exact={true} component={Login} checkAuth={false}></AuthRoute>
						<AuthRoute path="/login"exact={true}  component={Login} checkAuth={false}></AuthRoute>
						<AuthRoute path="/dashboard" exact={true} redirectTo="/login" component={Dashboard}></AuthRoute>
					</DashBoardContext.Provider>
				</LoginContext.Provider>
	  		</Suspense>
      	</Router>
  );
}

export default App;
