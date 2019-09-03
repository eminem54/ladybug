import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import Main from './main/main.js';
import {createBrowserHistory} from 'history';

export default (
    <Router history={createBrowserHistory()}>
        <Route path="/" component={Main}>
            
        </Route>
    </Router>
)
