import React from 'react';
import './app.scss';
import { Route, Switch, Redirect } from 'react-router-dom';

import Main from './Main/Main';

const App = () => {
    return (
        <Switch>
            <Route path="/main" component={Main} />
            <Redirect to="/main" />
        </Switch>
    )
}

export default App;