import React from 'react';

import {ComponentThreeContext} from '../Context';

class ComponentThree extends React.Component{

	render(){
		return(
			<ComponentThreeContext.Consumer>
			{value=><div>ComponentThree---{value}</div>}
			</ComponentThreeContext.Consumer>
		)
	}
}

export default ComponentThree;