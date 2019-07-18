import React from 'react';

import combination from './combination';

class Puppy extends React.Component {
	render() {
		let displayData = '';
		if(this.props.data){
			displayData = this.props.data.map((item, key)=>{
				return <div>{item.name}</div>;
			});
		}
		return (<div> PUPPY NAMES :
			<div>{displayData}</div>
			</div>);
  	}
}

export default combination(Puppy);
