import React, { Component } from 'react'

import '../styles/components/MailHeader.css';
import SearchBar from '../components/SearchBar';
import {withRouter} from 'react-router-dom';

class MailHeader extends Component {

	constructor(props){
		super(props);
		let userDetails = JSON.parse(localStorage.getItem("userDetails"));
		this.state = {
			userName : userDetails.firstname.substr(0,1).toUpperCase(),
			mailId : userDetails.email + '@lightmail.com'
		}
		this.signIn = this.signIn.bind(this);
	}

	signIn(){
		this.props.history.push({pathname: '/signin'});
	}

	render() {
		return (

			<div className="mail-main-header">
			<div className="row mail-main-row">
				<div className="col-md-2 menu_logo" style={{paddingLeft: '8px'}}>					
					<div className="menu_and_logo_div">
						<span className="fas fa-bars mail-menu-button"></span>
						<div className="mail_header_logo_image"></div>
					</div>
				</div>

				<div className="col-md-8">					
					<SearchBar></SearchBar>
				</div>

				<div className="col-md-1">	
					<div className="mail_username" onClick={this.signIn}>
						<div>{this.state.userName}</div>	
					</div>
				</div>
			</div>
		</div>
		)
	}
}

export default withRouter(MailHeader);