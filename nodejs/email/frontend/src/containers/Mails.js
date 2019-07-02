import React, { Component } from 'react'

import MailHeader from '../components/MailHeader';
import Sidemenu from './Sidemenu';
import {Route} from 'react-router-dom';
import InboxList from './InboxList';

import '../styles/containers/Mails.css';

class Mails extends Component {
	
	constructor(props){
		super(props);
		this.state = {
	
		}
	}

	render() {
		return (
			<>
			<div className="mail-main-div">
				<MailHeader name={localStorage.getItem("firstname")}></MailHeader>
				<div className="mail-content-row">
					<div className="mail-content-sidemenu">					
						<Sidemenu></Sidemenu>
					</div>
					<div className="mail-content-body">
				    	<Route path="/mails/inbox"  component={InboxList}></Route>
						<Route path="/mails/starred"  component={()=><div>STARRED</div>}></Route>
						<Route path="/mails/snoozed"  component={()=><div>SNOOZED</div>}></Route>
						<Route path="/mails/sent"  component={()=><div>SENT</div>}></Route>
						<Route path="/mails/drafts"  component={()=><div>DRAFTS</div>}></Route>
						<Route path="/mails/important"  component={()=><div>IMPORTANT</div>}></Route>
						<Route path="/mails/chats"  component={()=><div>CHATS</div>}></Route>
						<Route path="/mails/scheduled"  component={()=><div>SCHEDULED</div>}></Route>
						<Route path="/mails/allmails"  component={()=><div>ALL MAILS</div>}></Route>
						<Route path="/mails/spam"  component={()=><div>SPAM</div>}></Route>
						<Route path="/mails/trash"  component={()=><div>TRASH</div>}></Route>
						<Route path="/mails/categories"  component={()=><div>CATEGORIES</div>}></Route>
						<Route path="/mails/managelabel"  component={()=><div>MANAGE LABEL</div>}></Route>
						<Route path="/mails/createlabel"  component={()=><div>CREATE LABEL</div>}></Route>
					</div>
				</div>
			</div>
			</>
		)
	}
}

export default Mails