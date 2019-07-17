import React, { Component } from 'react'

import MailHeader from '../components/MailHeader';
import MailComposer from '../components/MailComposer';
import Sidemenu from './Sidemenu';
import {Route} from 'react-router-dom';
import InboxList from './InboxList';

import '../styles/containers/Mails.css';

class Mails extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			openCompose :false
		}
	}

	openCompose(){
		this.setState({
			openCompose : true
		})
	}

	closeCompose(){
		this.setState({
			openCompose : false
		})
	}

	render() {
		return (
			<>
			<div className="mail-main-div">
				<MailHeader></MailHeader>
				<div className="mail-content-row">
					<div className="mail-content-sidemenu">
						<Sidemenu openCompose={this.openCompose.bind(this)}></Sidemenu>
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
				<MailComposer openCompose={this.state.openCompose} closeCompose={this.closeCompose.bind(this)}></MailComposer>
			</div>
			</>
		)
	}
}

export default Mails