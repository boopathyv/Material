import React, { Component } from 'react';

import '../styles/components/Splitter.css';

class Splitter extends Component {
	render() {
		let splitterClass = '';
		if(this.props.splitType === Splitter.splitType.VERTICAL){
			splitterClass = 'split_vertical';
		}else if(this.props.splitType === Splitter.splitType.HORIZONTAL){
			splitterClass = 'split_horizontal';
		}
		return (
			<div className={`splitter-main-div ${splitterClass}`}>
				{this.props.children.map((child,key)=>{
					return <div key={key} className={`split_container container_${key} container_${this.props.splitType.toLowerCase()}`}>
								{key === 0? <></>:
								<div className={`splitter ${this.props.splitType.toLowerCase()}_splitter`}></div>
								}
								{child}
						   </div>
				})}
			</div>
		)
	}
}

const splitType = {
	VERTICAL: 'VERTICAL',
	HORIZONTAL: 'HORIZONTAL'
}
  
Splitter.defaultProps = {
	splitType : 'VERTICAL'
}

Splitter.splitType = splitType;

export default Splitter
