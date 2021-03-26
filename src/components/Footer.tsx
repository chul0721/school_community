import React from 'react';
import '../styles/Footer.css';

class Footer extends React.Component {
  render() {
    return ( 
      <div className="Footer">
        <div className="copyright">
          2021 김병철 © All Rights Reserved. <br />
          Made by. <a href="https://github.com/chul0721" target="blank" className="me">Kim Byung Chul</a> <br />
          <a href="https://github.com/chul0721/school_community" target="blank" className="source">View Source Code</a>
        </div>
      </div>
    );
  }
}

export default Footer;