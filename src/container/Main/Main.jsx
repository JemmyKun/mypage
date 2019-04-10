import React from 'react';
import './main.scss';
import Head from '../Head/Head';

import { Route, Redirect, Switch } from 'react-router';

import Home from '../Home/Home';
import About from '../About/About';
import Article from '../Article/Article';

const Main = (props) => {
    return (
        <div className="app-container">
            <Head history={props.history} />
            <div className="main-container">
                <Switch>
                    <Route path={'/main/home'} component={Home} />
                    <Route path={'/main/about'} component={About} />
                    <Route path={'/main/article'} component={Article} />
                    <Redirect to="/main/home" />
                </Switch>
            </div>
        </div>
    )
}

export default Main;