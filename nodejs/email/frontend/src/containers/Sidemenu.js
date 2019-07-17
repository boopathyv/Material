import React, { Component } from 'react'

import {withRouter} from 'react-router-dom';
import Splitter from '../components/Splitter';

import '../styles/containers/Sidemenu.css';

class Sidemenu extends Component {

	constructor(props){
		super(props);
		this.state = {
			isOpen : true,
			wantMore : false
		}
	}

	onMoreClick(){
		let wantMore = !this.state.wantMore;
		this.setState({wantMore:wantMore});
	}

	onCompose(e){

	}

	linkTo(e){
		let linkTo = e.currentTarget.getAttribute("linkto");
		let sidemenuItems = document.getElementsByClassName('sidemenu_item');
		Array.from(sidemenuItems).forEach(element => {
			if(element === e.currentTarget){
				element.classList.add('sidemenu_item_selected');
			}else{
				element.classList.remove('sidemenu_item_selected');
			}
		});
		this.props.history.push(linkTo);
	}

	render() {
		let isOpen = this.state.isOpen ? "sidemenu_text":"sidemenu_text sidemenu_shrink";
		let moreOrLess = this.state.wantMore ? 'fa-chevron-up':'fa-chevron-down';
		let moreOrLessContent = this.state.wantMore ? 'Less':'More';

		return (			
			<div className={this.state.isOpen ? "sidemenu_bar sidemenu_open":"sidemenu_bar"}>
			
			<Splitter splitType={Splitter.splitType.HORIZONTAL}>
				<div className="sidemenu_main_div">
					<div className="sidemenu_compose" onClick={this.props.openCompose.bind(this)}>
						<div className="sidemenu_compose_div">
							<div className="sidemenu_compose_button"></div>
							<div className={isOpen}>Compose</div>
						</div>
					</div>
					<div className="sidemenu_items">
						<div className="sidemenu_inbox sidemenu_item sidemenu_item_selected" linkto="/mails/inbox" onClick={this.linkTo.bind(this)}>
					      	<span className="fas fa-inbox sidemenu_inbox_button"></span>
				     		<div className={isOpen}>Inbox</div>
						</div>
						<div className="sidemenu_starred sidemenu_item"  linkto="/mails/starred" onClick={this.linkTo.bind(this)}>
							<span className="fas fa-star sidemenu_starred_button"></span>
							<div className={isOpen}>Starred</div>
						</div>
						<div className="sidemenu_snoozed sidemenu_item"  linkto="/mails/snoozed" onClick={this.linkTo.bind(this)}>
							<span className="fas fa-clock sidemenu_snoozed_button"></span>
							<div className={isOpen}>Snoozed</div>
						</div>
						<div className="sidemenu_sent sidemenu_item"  linkto="/mails/sent" onClick={this.linkTo.bind(this)}>
							<span className="fas fa-paper-plane sidemenu_sent_button"></span>
							<div className={isOpen}>Sent</div>
						</div>
						<div className="sidemenu_drafts sidemenu_item" linkto="/mails/drafts" onClick={this.linkTo.bind(this)}>
							<span className="fas fa-clipboard sidemenu_drafts_button"></span>
							<div className={isOpen}>Drafts</div>
						</div>
						<div className="sidemenu_more sidemenu_item" onClick={this.onMoreClick.bind(this)}>
							<span className={moreOrLess + " fas sidemenu_more_button"}></span>
							<div className={isOpen}>{moreOrLessContent}</div>
						</div>

					<div className={(this.state.wantMore ? "":"more_item_hide" )+" sidemenu_more_items"}>
						<div className="sidemenu_important sidemenu_item"  linkto="/mails/important" onClick={this.linkTo.bind(this)}>
							<span className="fas fa-tag sidemenu_important_button"></span>
							<div className={isOpen}>Important</div>
						</div>
						<div className="sidemenu_chats sidemenu_item"  linkto="/mails/chats" onClick={this.linkTo.bind(this)}>
							<span className="fas fa-comments sidemenu_chats_button"></span>
							<div className={isOpen}>Chats</div>
						</div>
						<div className="sidemenu_scheduled sidemenu_item" linkto="/mails/scheduled" onClick={this.linkTo.bind(this)}>
							<span className="fas fa-business-time sidemenu_scheduled_button"></span>
							<div className={isOpen}>Scheduled</div>
						</div>
						<div className="sidemenu_allmail sidemenu_item" linkto="/mails/allmails" onClick={this.linkTo.bind(this)}>
							<span className="fas fa-envelope sidemenu_allmail_button"></span>
							<div className={isOpen}>All Mail</div>
						</div>
						<div className="sidemenu_spam sidemenu_item" linkto="/mails/spam" onClick={this.linkTo.bind(this)}>
							<span className="fas fa-exclamation-triangle sidemenu_spam_button"></span>
							<div className={isOpen}>Spam</div>
						</div>

						<div className="sidemenu_trash sidemenu_item" linkto="/mails/trash" onClick={this.linkTo.bind(this)}>
							<span className="fas fa-trash sidemenu_trash_button"></span>
							<div className={isOpen}>Trash</div>
						</div>

						<div className="sidemenu_categories sidemenu_item" linkto="/mails/categories" onClick={this.linkTo.bind(this)}>
							<span className="fas fa-tag sidemenu_categories_button"></span>
							<div className={isOpen}>Categories</div>
						</div>

						<div className="sidemenu_manage_labels sidemenu_item" linkto="/mails/managelabel" onClick={this.linkTo.bind(this)}>
							<span className="fas fa-cog sidemenu_manage_labels_button"></span>
							<div className={isOpen}>Manage labels</div>
						</div>

						<div className="sidemenu_new_label sidemenu_item" linkto="/mails/createlabel" onClick={this.linkTo.bind(this)}>
							<span className="fas fa-plus sidemenu_new_label_button"></span>
							<div className={isOpen}>Create new label</div>
						</div>
					</div>
					</div>
				</div>

				<div className="sidemenu_main_div">
					Section2
				</div>

			</Splitter>
			</div>
	)}
}

export default withRouter(Sidemenu);