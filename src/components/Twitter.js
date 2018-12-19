import React, { Component } from 'react';
import TwitterLogin from 'react-twitter-auth';

export default class Twitter extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    componentClicked =(err)=>{
        console.log("component clicked ", err);
        
    }

    responseTwitter = (response)=>{
        console.log(response);
        
        // this.setState({
        //     isLoggedIn: true,
        //     userID: response.userID,
        //     name: response.name,
        //     email: response.email,
        //     picture: response.picture.data.url
        // })
        
    }
  render() {
      let twContent;

      if(this.state.isLoggedIn){
        twContent = (
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
          twContent = (<TwitterLogin loginUrl="http://localhost:3000/auth/twitter"
          onFailure={this.componentClicked}
          onSuccess={this.responseTwitter}
          requestTokenUrl="http://localhost:3000/auth/twitter/reverse"
          showIcon={true}
          />)
      }
    return (
      <div>
        {twContent}
      </div>
    )
  }
}
