import React from 'react';
import '../styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <div>

      <div className="navbar">
        <span className="nav_name">
          <a href="/">
            백현중 커뮤니티
          </a>
        </span>
        <span className="glow-on-hover">
          <a href="/login">
            로그인
          </a>
        </span>
        <span className="line"></span>
        <span className="glow-on-hover">
          <a href="/join">
            회원가입
          </a>
        </span>
        <span className="line"></span>
        <span className="glow-on-hover">
          <a href="/board">
            게시판
          </a>
        </span>
      </div>

      </div>
    );  
  }
}

export default Header;
