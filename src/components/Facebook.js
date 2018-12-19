import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import HostAPI from '../requests';

export default class Facebook extends Component {
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
  render() {
      let fbContent;

      if(this.state.isLoggedIn){
        fbContent = (
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
          fbContent = (<FacebookLogin
            appId="1945751425501816"
            autoLoad={true}
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
