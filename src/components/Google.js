import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import HostAPI from '../requests';
import '../styles/Styles.css';

export default class Google extends Component {
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

    responseGoogle = async (response)=>{
        response.userID = response.googleId;
        delete response.googleId;

        response.loginWith = "Google";
        
        const data = await HostAPI.post('/user',response);
        if(data){ 
            this.setState({
                isLoggedIn: true,
                userID: data.profileObj.googleId,
                name: data.profileObj.name,
                email: data.profileObj.email,
                picture: data.profileObj.imageUrl
            })
        }
        
    }

    responseGoogleFailed = (response)=>{
        console.log("failed", response);
        
    }
  render() {
      let gContent;

      if(this.state.isLoggedIn){
        gContent = (
            <div style={{
                width: '400px',
                margin:'auto',
                background: '#f4f4f4',
                padding: '20px'
            }}>
            <img src={this.state.picture} alt={this.state.name}></img>
            <h2>Welcome {this.state.name}</h2>
            Email: {this.state.email}

            </div>
        )
      }else{
          gContent = (<GoogleLogin
            clientId= {process.env.REACT_APP_API_KEY_GGL}
            buttonText="Login with Google"
            className="login-google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogleFailed}
          />)
      }
    return (
      <div>
        {gContent}
      </div>
    )
  }
}
