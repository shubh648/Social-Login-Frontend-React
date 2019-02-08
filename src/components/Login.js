import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Facebook from './Facebook';
import Google from './Google';
import Instagram from './Instagram';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons';
import {FacebookShareButton, FacebookShareCount, FacebookIcon} from 'react-share';

library.add(fab)

class Login extends Component {
  render() {

    const shareUrl = 'https://photos.app.goo.gl/E39E3PcA4B7xXp5j6';
    const title = 'My Pic';

    return (
      <div className="App bg-dark">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header><br/>
        <div className="card card-style">
          <div className="card-body">
            <h5 className="card-title"><u>Sign In/Sign Up</u></h5><br/>
              <Facebook/><br/>
                "OR"<br/>
              <Google/><br/>
                "OR"<br/>
              <Instagram/><br/>
          </div>
        </div>

        <div className="card card-style">
          <div className="card-body">
            <h5 className="card-title"><u>Share</u></h5><br/>
            <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button">
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>

          <FacebookShareCount
            url={shareUrl}
            className="Demo__some-network__share-count">
            {count => count}
          </FacebookShareCount>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
