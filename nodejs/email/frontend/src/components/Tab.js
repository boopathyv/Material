import React, { Component } from 'react'

import '../styles/components/Tab.css';

class Tab extends Component {
	render() {
		return (
			<div className="tab">
				<div className="tab-item-header-panel">
					{
						this.props.tabHeaders.map((header,index)=>{
							let style = {};
							if(this.props.tabId[index] === this.props.activeTab){
								style={borderBottom: '5px solid blue',backgroundColor: 'rgba(8, 7, 7, 0.41)'};
							}
							return <div style={style} key={index} className="tab-item-header" id={`${this.props.tabId[index]}`} onClick={this.props.onTabSelect}>
										<div className={`tab-header-icon ${this.props.icons[index]}`}
											headerindex={index}></div>
										<div className="tab-header">{header}</div>
									</div>
						})
					}
				</div>
				<div className="tab-item-content-panel">
					{this.props.children.map((child,index)=>{
						if(child.props.id === this.props.activeTab)return child;
						else return <React.Fragment key={index}></React.Fragment>;
					})}
				</div>
			</div>
		)
	}
}

export default Tab
