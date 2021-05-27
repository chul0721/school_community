import React from 'react'
import JoinState from '../interface/JoinState'
import { passwordStrength } from 'check-password-strength'

export default class Join extends React.Component {
    state: JoinState = {
        id: '',
        pw: '',
        pwcheck: '',
        name: '',
    }

    handleChangeID = (event:any) => {
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
        if(passwordStrength(`${this.state.pw}`).value === 'Weak' || 'Too Weak'){
            return alert("비밀번호는 길이가 8자 이상이여야 하며, 특수문자나 대문자 중 한가지를 포함하여야 합니다.")
        }

        event.preventDefault()
    
        const user = {
            email: this.state.id,
            pw: this.state.pw,
            name: this.state.name,
        }


        fetch('http://localhost:3001/api/join', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
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
                            onChange={this.handleChangeID}
                            required
                        />
                        <label>아이디</label>
                    </div>

                    <div className="user-box">
                        <input
                            type="text"
                            name="name"
                            onChange={this.handleChangeName}
                            required
                        />
                        <label>학번 및 이름</label>
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
