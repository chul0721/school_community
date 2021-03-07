import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>

      <div className="navbar">
        <span className="nav_name">
          <a href="/">
            2학년 5반 커뮤니티
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

export default App;
