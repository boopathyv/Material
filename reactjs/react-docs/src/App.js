import React from 'react';
import {ComponentOneContext} from './Context';
import ComponentOne from './context/ComponentOne';
import ListOfTenThings from './JSX/FunctionAsChildren';

function App() {// Context-Provider
  return (
	  <ComponentOneContext.Provider value={"green"}>
    	<div className="App">
			<ComponentOne></ComponentOne>
    	</div>
	  </ComponentOneContext.Provider>
  );
}

function AppFuntionAsChildren() {//JSX notations
	return (
		<ListOfTenThings/>
	);
}

function Appz() {
	return (
		<div>{true}</div>
	);
}

export default App;
