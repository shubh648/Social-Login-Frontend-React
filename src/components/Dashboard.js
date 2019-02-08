import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

class Dashboard extends Component {

    componentDidMount(){
        if(!this.props.user){
            return this.props.history.push('/');
        }
    }

    render() {
        return (
        <div>
            <h1>Welcome to Dashboard</h1>
        </div>
        )
    }
}

export default withRouter(Dashboard);