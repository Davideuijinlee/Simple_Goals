import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../assets/sass/main.scss';

import Problems from './Problems';
import Log from './Log';
import CreateBoard from './Create';


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Problems} />
                <Route path="/Log" component={Log} />
                <Route path="/create" component={CreateBoard} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
