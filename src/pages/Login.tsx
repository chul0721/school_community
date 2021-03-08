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
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="userid"
                        placeholder="ID를 입력하세요."
                        onChange={this.handleChangeId}
                    />
                    <input
                        type="text"
                        name="passwd"
                        placeholder="비밀번호를 입력하세요."
                        onChange={this.handleChangePw}
                    />
                </form>
            </div>
        )
    }
}