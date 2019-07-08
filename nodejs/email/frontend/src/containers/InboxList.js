import React, { Component } from 'react'

import Tab from '../components/Tab';
import TabItem from '../components/TabItem';
import MailList from '../components/MailList';

import '../styles/containers/InboxList.css';

class InboxList extends Component {
	constructor(props){
		super(props);
		let data = [{
			from:'Boopathy',
			subject:'Reg:Permission for Leave',
			body:'Hi Sir, I kindly request you to grant me leave for 2 days. With Regards, Boopathy.V',
			attachments:'body.mkv'
		},{
			from:'Naveen',
			subject:'Reg:Permission for Leave',
			body:'Hi Sir, I kindly request you to grant me leave for 2 days. With Regards, Boopathy.V',
			attachments:'body.mkv'
		},{
			from:'Ramesh',
			subject:'Reg:Permission for Leave',
			body:'Hi Sir, I kindly request you to grant me leave for 2 days. With Regards, Boopathy.V',
			attachments:'body.mkv'
		},{
			from:'Harish',
			subject:'Reg:Permission for Leave',
			body:'Hi Sir, I kindly request you to grant me leave for 2 days. With Regards, Boopathy.V',
			attachments:'body.mkv'
		},{
			from:'Naveen',
			subject:'Reg:Permission for Leave',
			body:'Hi Sir, I kindly request you to grant me leave for 2 days. With Regards, Boopathy.V',
			attachments:'body.mkv'
		},{
			from:'Ramesh',
			subject:'Reg:Permission for Leave',
			body:'Hi Sir, I kindly request you to grant me leave for 2 days. With Regards, Boopathy.V',
			attachments:'body.mkv'
		},{
			from:'Harish',
			subject:'Reg:Permission for Leave',
			body:'Hi Sir, I kindly request you to grant me leave for 2 days. With Regards, Boopathy.V',
			attachments:'body.mkv'
		},{
			from:'Naveen',
			subject:'Reg:Permission for Leave',
			body:'Hi Sir, I kindly request you to grant me leave for 2 days. With Regards, Boopathy.V',
			attachments:'body.mkv'
		},{
			from:'Ramesh',
			subject:'Reg:Permission for Leave',
			body:'Hi Sir, I kindly request you to grant me leave for 2 days. With Regards, Boopathy.V',
			attachments:'body.mkv'
		},{
			from:'Harish',
			subject:'Reg:Permission for Leave',
			body:'Hi Sir, I kindly request you to grant me leave for 2 days. With Regards, Boopathy.V',
			attachments:'body.mkv'
		},{
			from:'Naveen',
			subject:'Reg:Permission for Leave',
			body:'Hi Sir, I kindly request you to grant me leave for 2 days. With Regards, Boopathy.V',
			attachments:'body.mkv'
		}]
		this.state = {
			activeTab : "tab-primary",
			primaryData:data,
			socialData:data,
			promotionsData:data
		};
	}

	onTabSelect(e){
		this.setState({activeTab:e.currentTarget.id});
	}

	render() {
		return (
			<div className="inbox-list">
				<Tab tabHeaders={['Primary','Social','Promotions']} icons={['fas fa-inbox','fas fa-users','fas fa-tag']}
						tabId={['tab-primary','tab-social','tab-promotions']}
						activeTab={this.state.activeTab} onTabSelect={this.onTabSelect.bind(this)}>
					<TabItem id="tab-primary">
						<MailList listData={this.state.primaryData}></MailList>
					</TabItem>
					<TabItem id="tab-social">
						<MailList listData={this.state.socialData}></MailList>
					</TabItem>
					<TabItem id="tab-promotions">
						<MailList listData={this.state.promotionsData}></MailList>
					</TabItem>
				</Tab>
			</div>
		)
	}
}

export default InboxList
