import React, { Component } from 'react';

import '../styles/components/Splitter.css';

class Splitter extends Component {

	onSplitterDrag(e){
		let height = e.clientY - e.currentTarget.previousSibling.getBoundingClientRect()['top'];
		let parent = e.currentTarget.parentElement;
		let splitContainers = document.getElementsByClassName('split_container',parent);
		let isAfterSibling = false;
		Array(splitContainers).forEach((splitContainer,index)=>{
			if(e.currentTarget.previousSibling === splitContainer[index] && !isAfterSibling){
				splitContainer[index].style.setProperty('flex','0');	
			}
			splitContainer[index].style.setProperty('flex','1 1 auto');
		})
		e.currentTarget.previousSibling.style.setProperty('height',height+'px');
	}

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
					return  <React.Fragment key={key}>
								{key === 0? <React.Fragment key={key}></React.Fragment>:
								<div className={`splitter ${this.props.splitType.toLowerCase()}_splitter`}
								onDrag={this.onSplitterDrag.bind(this)} onDragEnd={this.onSplitterDrag.bind(this)}></div>}
								<div key={`container-${key}`} style={key===0?{}:{flex:'auto',backgroundColor:'grey'}}
								className={`split_container container_${key} container_${this.props.splitType.toLowerCase()}`}>
									{child}
						   		</div>
						   </React.Fragment>
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
