import React from 'react';
import ReactDOM,{ BrowserRouter as Router, Route, Link} from 'react-dom';
import './index.css';

import App from './App';
import home from './Components/home'
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
<Router>
<Route exact={true} path="/" render={() => {
    return (
        <div className="jumbotron">
            <h1 className="display-3">Hello, world!</h1>
        </div>
    );
}}/>
</Router>
registerServiceWorker();
