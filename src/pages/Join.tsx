import React from 'react';
import axios from 'axios';

export default class Join extends React.Component {
    state = {
        id: '',
        pw: '',
        pwcheck: '',
        name: ''
    }
    
    handleChangeId = (event:any):any => {
        this.setState({ id: event.target.value });
    }
    handleChangePw = (event:any):any => {
        this.setState({ pw: event.target.value });
    }
    handleChangePwConfirm = (event:any):any => {
        this.setState({ pwcheck: event.target.value });
    }
    handleChangeName = (event:any):any => {
        this.setState({ name: event.target.value });
    }

    formSubmit = (event:any):any => {
        if((this.state.id == '') || (this.state.pw == '') || (this.state.pwcheck == '') || (this.state.name == '')){
            return alert("모든 양식을 채워주세요.")
        }
        if(!(this.state.pwcheck == this.state.pw)){
            return alert("비밀번호가 일치하지 않습니다.")
        }

        event.preventDefault();
    
        const user = {
            id: this.state.id,
            pw: this.state.pw,
            name: this.state.name
        };
    
        console.log(user)
    
        axios.post('http://localhost:5000/api/join', user)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.formSubmit}>
                    <input
                        type="text"
                        name="id"
                        placeholder="ID를 입력하세요."
                        onChange={this.handleChangeId}
                    />
                    <input
                        type="text"
                        name="pw"
                        placeholder="비밀번호를 입력하세요."
                        onChange={this.handleChangePw}
                    />
                    <input
                        type="text"
                        name="pwcheck"
                        placeholder="비밀번호를 확인하세요."
                        onChange={this.handleChangePwConfirm}
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="사용자 이름을 입력하세요."
                        onChange={this.handleChangeName}
                    />
                    <input type="submit" value="회원가입" />
                </form>
            </div>
        )
    }
}