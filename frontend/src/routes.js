import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Main'  
import Detail from "./pages/Detail"

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact  path="/" component={Main}/>
            <Route path="/products/:id" component={Detail}/>
        </Switch>
    </BrowserRouter>
)

export default Routes