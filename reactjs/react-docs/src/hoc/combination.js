import React, { Component } from 'react'
import axios from 'axios';

const combination = (OriginalComponent) =>{
	class NewComponent extends Component {

		constructor(props){
			super(props);
			this.state = {
				loading : false,
				payload : []
			}
		}

		componentDidMount(){
			this.setState({loading:true});
			axios.get('http://localhost:3002'+this.props.path).then( res =>{
				this.setState({
					payload : res.data,
					loading:false
				})
			})
		}

  		render() {
			return (
	  			<OriginalComponent data={this.state.payload.data} {...this.props}/>
			)
  		}
	}

	return NewComponent;
};

export default combination
