import React,{Component} from 'react';

import '../styles/components/MailComposer.css';
import CKEditor from "react-ckeditor-component";
import postman from '../mediator/postman';


class MailComposer extends Component {

	constructor(props){
		super(props);
		this.state = {
			fromMailId : '',
			toMailId : '',
			cc : [],
			bcc : [],
			subject : '',
			content : '',
			dropDownSelector:'',
			dropDownData:[],
			dropDownTop:''
		}
	}

	afterPaste(event){
		console.log('after paste',event);
	}

	onChange(event){
		this.setState({
			content:event.editor.getData()
		})
	}

	toMailChange(event){
		let search = event.currentTarget.value;
		let top = event.currentTarget.getBoundingClientRect()['bottom']+'px';
		postman.get('/user/getMailIds',{'search':search},function(error,response){
			if(!error && response['data']['mailIds']){
				this.setState({
					dropDownData:response['data']['mailIds'],
					toMailId:[search],
					dropDownSelector:'toMailId',
					dropDownTop:top
				});
			}else{
				alert(error);
			}
		}.bind(this));
	}

	onChangeHandle(e){
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]:value
		})
	}

	onDropDownSelect(e){
		let selector = e.currentTarget.getAttribute('selector');
		let value = e.currentTarget.getAttribute('value');
		let mailIds = this.state[selector]
		mailIds.push(value);
		this.setState({
			[selector] : mailIds
		})
	}

	onMailSendClick(e){
		console.log(this.state);
	}

	render(){
		return (
			<div className={`mail-composer ${this.props.openCompose ? '':'close_composer'}`}>
				<div className="compose_bar">
					<div className="compose_bar_text">New Message</div>
					<div className="compose_bar_close" onClick={this.props.closeCompose}>X</div>
				</div>
				<div className="compose_content">
				<div className="to_mail">
					<input type="text" className="to_mail_id" id="to-mails-name" placeholder="Recipients"
						name="toMailId" value={this.state.toMailId} onChange={this.onChangeHandle.bind(this)} 
						onFocus={this.toMailChange.bind(this)}/>
					{/* <div className="input-drop-down" style={{top:this.state.dropDownTop}}>
						{this.state.dropDownData.map(data=>{
							return <div className="drop-down-item" selector={this.state.dropDownSelector} value={data} onClick={this.onDropDownSelect.bind(this)}>{data}</div>
						})}
					</div> */}
				</div>
				<div className="cc_mail">
					<input type="text" className="cc_mail_ids" id="cc-mails" placeholder="Cc"
						name="cc" value={this.state.cc} onChange={this.onChangeHandle.bind(this)}/>
				</div>
				<div className="bcc_mail">
					<input type="text" className="bcc_mail_ids" id="bcc-mails" placeholder="Bcc"
						name="bcc" value={this.state.bcc} onChange={this.onChangeHandle.bind(this)}/>
				</div>
				<div className="subject_mail">
					<input type="text" className="subject_mail_ids" id="subject-mails" placeholder="Subject"
						name="subject" value={this.state.subject} onChange={this.onChangeHandle.bind(this)}/>
				</div>
				<div>
					<CKEditor 
    	          		activeClass="p10" 
              			content={this.state.content}
              			events={{
	                		/* "blur": this.onBlur,*/
                			"afterPaste": this.afterPaste.bind(this), 
                			"change": this.onChange.bind(this)
              			}}
             		/>
				</div>
					<div>
						  <button id="mail-send-button" onClick={this.onMailSendClick.bind(this)}>SEND</button>
					</div>
				</div>

				
			</div>
		)
	}
}

export default MailComposer;