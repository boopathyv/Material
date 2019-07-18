import React from 'react';

import combination from './combination';

class Human extends React.Component {
	render() {
		let displayData = '';
		if(this.props.data){
			displayData = this.props.data.map((item, key)=>{
				return <span>{item.name} </span>;
			});
		}
		return (<div> HUMAN NAMES :
			<div>{displayData}</div>
			</div>);
  	}
}

export default combination(Human);
