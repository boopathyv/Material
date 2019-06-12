import React, { Component } from 'react'

class Mails extends Component {
	render() {
		return (
			<div>
				Mails
				<button onClick={()=>{
					this.props.history.push('/')
				}}>LOGOUT</button>	
			</div>
		)
	}
}

export default Mails