import React, { Component } from 'react';
import InstagramLogin from 'react-instagram-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HostAPI from '../requests';

export default class Instagram extends Component {
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

    responseInstagram = async (resCode)=>{
      console.log("instagram",resCode);
      // let response={};
      // response.instaCode = resCode;
      // response.loginWith = "Instagram";
      
      // const data = await HostAPI.post('/user',response);
      // if(data){
      
      // this.setState({
      //     isLoggedIn: true,
      //     userID: response.userID,
      //     name: response.name,
      //     email: response.email,
      //     picture: response.picture.data.url
      // })
    // }
        
    }
  render() {
      let iContent;

      if(this.state.isLoggedIn){
        // iContent = (
        //     <div style={{
        //         width: '400px',
        //         margin:'auto',
        //         background: '#f4f4f4',
        //         padding: '20px'
        //     }}>
        //     <img src={this.state.picture} alt={this.state.name}></img>
        //     <h2>Welcome {this.state.name}</h2>
        //     Email: {this.state.email}

        //     </div>
        // )
      }else{
          iContent = (<InstagramLogin
            clientId="45c2312025954c48bbb6d85b5133f04b"
            cssClass="insta-login"
            implicitAuth="true"
            scope="likes+comments+follower_list"
            onSuccess={this.responseInstagram}
            onFailure={this.responseInstagram}
            >
            <FontAwesomeIcon
            className="insta-icon"
            icon={['fab', 'instagram']}
            />
            <span> Login With Instagram</span>
            </InstagramLogin>)
      }
    return (
      <div>
        {iContent}
      </div>
    )
  }
}
