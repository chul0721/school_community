import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
    state = {
        userid: '',
        passwd: '',
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
    
        axios.post('http://localhost:5000/api/login', user)
          .then(res => {
            console.log(res);
            console.log(res.data);
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