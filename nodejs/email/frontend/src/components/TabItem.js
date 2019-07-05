import React, { Component } from 'react'

class TabItem extends Component {
	render() {
		return (
			<div id={this.props.id}>
				{this.props.children}
			</div>
		)
	}
}

export default TabItem
