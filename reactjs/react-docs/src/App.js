import React from 'react';
import {ComponentOneContext} from './Context';
import ComponentOne from './context/ComponentOne';

function AppContextProvider() {// Context-Provider
  return (
	  <ComponentOneContext.Provider value={"green"}>
    	<div className="App">
			<ComponentOne></ComponentOne>
    	</div>
	</ComponentOneContext.Provider>
  );
}

function App() {
	return (
		<div></div>
	);
}

export default App;
