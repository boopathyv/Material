import React, { Component } from 'react'

import '../styles/components/MailList.css';

class MailList extends Component {

	onStarSelect(e){
		let selected = e.currentTarget.getAttribute("selected");
		if(selected){
			e.currentTarget.classList.remove("checked");
			e.currentTarget.setAttribute("selected",false);
		}else{
			e.currentTarget.classList.add("checked");
			e.currentTarget.setAttribute("selected",true);
		}
	}

	render() {
		return (
			<div className="mail-list-content">
				{
					this.props.listData.map((data,key)=>{
						return <div key={key} className="mail-data">
									<div className="mail-select">
										<input style={{width: '30px',height: '20px'}} type="checkbox" aria-label="Checkbox for following text input"/>
									</div>
									<div className="fas fa-star mail-star-select" selected={false} onClick={this.onStarSelect.bind(this)}></div>
									
									{data['from']}
							   </div>;
					})
				}
			</div>
		)
	}
}

export default MailList
