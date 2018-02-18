import * as React from 'react';
import { render as ReactDomRender } from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { observer } from 'mobx-react';
import { action, observable } from 'mobx';
// browserHistory
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.scss';
import App from "./components/App";
import RegistrationForm from "./components/RegistrationForm";
import NewFormRef from "./components/NewFormRef";


const _ = require('lodash');


const rootEl = document.getElementById('react-root');

ReactDomRender(
    <Router history={hashHistory}>
        <Route path="/" component={App} />

        <Route path="/about" component={RegistrationForm}/>
        <Route path="/users" component={NewFormRef} />

    </Router>,
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

