import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import BasicRouting from './BasicRouting';
import * as serviceWorker from './serviceWorker';
import NestedRouting from './NestedRouting';

// ReactDOM.render(<BasicRouting />, document.getElementById('root'));
ReactDOM.render(<NestedRouting />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
