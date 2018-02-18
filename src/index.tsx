import * as React from 'react';
import { render as ReactDomRender } from 'react-dom';
import { Router, Route } from 'react-router';
import { observer } from 'mobx-react';
import { action, observable } from 'mobx';
// browserHistory
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.scss';
import App from "./components/App";


const _ = require('lodash');

let array = [1];
let other = _.concat(array, 2, [3], [[4]]);

const rootEl = document.getElementById('react-root');

ReactDomRender(
    <App />,
    rootEl
);


/*ReactDomRender(
    <Router history={browserHistory}>
        <Route onEnter={Auth.requireAuth} component={MainPage} >
            <Route path="/" component={FirstLoginPage} />
            <Route path="/first-login(/:step)" component={FirstLoginPage} />
        </Route>

        <Route path="/403" component={ForbiddenPage} />
        <Route path="*" component={NotFoundPage} />
    </Router>,
    rootEl
);*/

