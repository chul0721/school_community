import React from 'react'
import JoinState from '../interface/JoinState'

export default class Join extends React.Component {
    state: JoinState = {
        id: '',
        pw: '',
        pwcheck: '',
        name: ''
    }
    
    handleChangeId = (event:any) => {
        this.setState({ id: event.target.value });
    }
    handleChangePw = (event:any) => {
        this.setState({ pw: event.target.value });
    }
    handleChangePwConfirm = (event:any) => {
        this.setState({ pwcheck: event.target.value });
    }
    handleChangeName = (event:any) => {
        this.setState({ name: event.target.value });
    }

    formSubmit = (event:any) => {
        if((this.state.id === '') || (this.state.pw === '') || (this.state.pwcheck === '') || (this.state.name === '')){
            return alert("모든 양식을 채워주세요.")
        }
        if(!(this.state.pwcheck === this.state.pw)){
            return alert("비밀번호가 일치하지 않습니다.")
        }

        event.preventDefault();
    
        const user = {
            id: this.state.id,
            pw: this.state.pw,
            name: this.state.name
        };
    
        console.log(user)
    
        fetch('http://localhost:3001/api/join', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(user)
        }).then((res) => {
            console.log(res)
        })
    }

    render() {
        return(
            <div>
                <div className="login-box">
                <h2>회원가입</h2>
                <form onSubmit={this.formSubmit}>
                    <div className="user-box">
                        <input
                            type="text"
                            name="id"
                            onChange={this.handleChangeId}
                            required
                        />
                        <label>아이디</label>
                    </div>

                    <div className="user-box">
                        <input
                            type="password"
                            name="pw"
                            onChange={this.handleChangePw}
                            required
                        />
                        <label>비밀번호</label>
                    </div>

                    <div className="user-box">
                        <input
                            type="password"
                            name="pwcheck"
                            onChange={this.handleChangePwConfirm}
                            required
                          />
                        <label>비밀번호 확인</label>
                    </div>

                    <div className="user-box">
                        <input
                            type="text"
                            name="name"
                            onChange={this.handleChangeName}
                            required
                        />
                        <label>닉네임</label>
                    </div>

                    <button type="submit" className="button">
                        Submit
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </form>
                </div>
            </div>
        )
    }
}
