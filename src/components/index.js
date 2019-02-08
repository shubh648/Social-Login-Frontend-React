import Dashboard from './Dashboard';
import Login from './Login';
import { Route, withRouter, Redirect } from 'react-router-dom'
import { Switch } from 'react-router'

import React, { Component } from 'react'

 class AppRoute extends Component {
     render(){
         
         return(
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route 
                    path='/dashboard' exact strict 
                    render={
                        ( { location : { user } } )=>
                        <Dashboard user={user} /> 
                    }
                />
            </Switch>
         )
     }
  
}


export default withRouter(AppRoute);



