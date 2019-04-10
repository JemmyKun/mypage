import React from 'react';
import './app.scss';
import { Route, Switch, Redirect } from 'react-router-dom';

import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

import Main from './Main/Main';

const App = () => {
    return (
        <LocaleProvider locale={zh_CN}>
        <Switch>
            <Route path="/main" component={Main} />
            <Redirect to="/main" />
        </Switch>
        </LocaleProvider>
    )
}

export default App;