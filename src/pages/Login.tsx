import React from 'react';
import LoginState from '../interface/LoginState'

export default class Login extends React.Component {
    state: LoginState = {
        userid: '',
        passwd: ''
    }

    handleChangeId = (event:any):any => {
        this.setState({ userid: event.target.value });
      }
    
    handleChangePw = (event:any):any => {
        this.setState({ passwd: event.target.value });
    }
    
    handleSubmit = (event:any):any => {
        event.preventDefault();
    
        const user = {
          userid: this.state.userid,
          passwd: this.state.passwd
        };
    
        console.log(user)
    
        fetch('http://localhost:3001/api/login', {
            method: 'POST',
            body: JSON.stringify(user)
        }).then((res) => {
            console.log(res)
        })
    }

    render() {
        return(
            <div>
                <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="user-box">
                    <input
                        type="text"
                        name="userid"
                        onChange={this.handleChangeId}
                        required
                    />
                    <label>ID</label>
                    </div>
                    <div className="user-box">
                    <input
                        type="password"
                        name="passwd"
                        onChange={this.handleChangePw}
                        required
                    />
                    <label>PW</label>
                    </div>
                    <button type="submit" className="button">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </button>
                </form>
                </div>
            </div>
        )
    }
}