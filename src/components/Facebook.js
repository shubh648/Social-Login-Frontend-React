import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import HostAPI from '../requests';
import '../styles/Styles.css';
import { withRouter } from 'react-router-dom';

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
            console.log(data);
            
        
            if(data){
                return this.props.history.push({pathname: '/dashboard', isLoggedIn: true, user: data})
            }
        }
        
    }



    render() {

    return (
      <div>
            <FacebookLogin
            textButton=" Login With Facebook"
            cssClass="kep-login-facebook"
            appId="1945751425501816"
            autoLoad={false}
            fields="name,email,friends,picture,birthday"
            scope="public_profile,user_friends,user_birthday"
            returnScopes="true"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
            icon="fa-facebook" />
      </div>
    )
  }
}

export default withRouter(Facebook);