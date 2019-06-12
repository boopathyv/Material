import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// import Basic from './examples/01-Basic';
// import UrlParameters from './examples/02-UrlParameters';
// import RedirectExample from './examples/03-RedirectAuthExample';
// import CustomLink from './examples/04-CustomLink';
// import PreventingTransition from './examples/05-PreventingTransition';
// import NoMatchExample from './examples/06-404Error';
// import RecursiveExample from './examples/07-RecursivePath';
// import SidebarExample from './examples/08-Sidebar';
// import AnimationExample from './examples/09-AnimatedTransition';
// import RouteConfigExample from './examples/10-subrouting';
// import ModalGallery from './examples/11-ModalGallery';
// import StaticRouterExample from './examples/12-StaticRouterContext';
import QueryParams from './examples/13-QueryParams';

ReactDOM.render(<QueryParams/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
