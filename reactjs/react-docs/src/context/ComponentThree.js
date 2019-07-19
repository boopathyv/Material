import React,{useContext} from 'react';

import {ComponentThreeContext} from '../Context';

function ComponentThree(){

	let value = useContext(ComponentThreeContext);
	return(
		<div>ComponentThree---{value}</div>
	)
}

export default ComponentThree;