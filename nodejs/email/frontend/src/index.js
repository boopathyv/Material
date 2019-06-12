import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

withRouter(App);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
