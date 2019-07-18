import React from 'react';

import {ComponentTwoContext} from '../Context';
import ComponentThree from './ComponentThree';

class ComponentTwo extends React.Component{

	render(){
		return(
			<ComponentTwoContext.Consumer>
			{value=>
			<div>ComponentTwo---{value}
				<><ComponentThree/></>
			</div>}
			</ComponentTwoContext.Consumer>
		)
	}
}

export default ComponentTwo;