import React from 'react';

import Cat from './components/Cat';
import Puppy from './components/Puppy';
import Human from './components/Human';

function App() {
  return (
    <div className="App">
      <Cat path='/cat'></Cat>
	  <Puppy path='/puppy'></Puppy>
	  <Human path='/human'></Human>
    </div>
  );
}

export default App;
