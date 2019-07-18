import React from 'react';

import ComponentTwo from './ComponentTwo';
import {ComponentOneContext,ComponentTwoContext,ComponentThreeContext} from '../Context';

class ComponentOne extends React.Component{

	render(){
		return(
			<ComponentTwoContext.Provider value={'pink'}>
			<ComponentThreeContext.Provider value={'three-rose'}>
			<ComponentOneContext.Consumer>
				{value=>
				<div>ComponentOne---{value}
					<><ComponentTwo/></>
				</div>
				}
			</ComponentOneContext.Consumer>
			</ComponentThreeContext.Provider>
			</ComponentTwoContext.Provider>
			
		)
	}
}

export default ComponentOne;