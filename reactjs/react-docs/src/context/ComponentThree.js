import React,{useContext} from 'react';

import {ComponentThreeContext} from '../Context';

function ComponentThree(){

	let pro = useContext(ComponentThreeContext);
	return(
		<div>ComponentThree---{pro}</div>
	)
}

export default ComponentThree;