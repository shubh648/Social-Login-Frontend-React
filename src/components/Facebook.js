import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import HostAPI from '../requests';
import '../styles/Styles.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt, withRouter} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Dashboard from './Dashboard';

class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    componentClicked =()=>{
        console.log("component clicked");
        
    }

    responseFacebook = async (response)=>{
        if(response.userID){
            response.userID = response.id;
            delete response.id;
            response.loginWith = "Facebook";
            
            const data = await HostAPI.post('/user',response);
        
            if(data){
                this.setState({
                    isLoggedIn: true,
                    userID: data.userID,
                    name: data.name,
                    email: data.email,
                    picture: data.picture.data.url
                })
            }
        }
        
    }
  render() {
      let fbContent;

      if(this.state.isLoggedIn){
        
            console.log(this.props.history)
            
        
      }else{
          fbContent = (<FacebookLogin
            textButton=" Login With Facebook"
            cssClass="kep-login-facebook"
            appId="1945751425501816"
            autoLoad={false}
            fields="name,email,friends,picture,birthday"
            scope="public_profile,user_friends,user_birthday"
            returnScopes="true"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
            icon="fa-facebook" />)
      }
    return (
      <div>
        {fbContent}
      </div>
    )
  }
}

export default withRouter(Facebook);