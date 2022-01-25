import React, { Component } from 'react';
export class Login extends Component {
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    } 
    emailChange = (event)=>{
        this.setState({
            email:event.target.value,
        })
    }

    passChange = (event)=>{
        this.setState({
            password:event.target.value,
        })
    }
    loginSubmit = ()=>{
        var check = false;
        var accounts = JSON.parse(localStorage.getItem('accounts'));
        accounts.forEach(element => {
            if (this.state.email === element.email && this.state.password === element.password){
                check = true
                alert (`${this.state.email} ${this.state.password}`)
            }
        });
        if (!check){
            alert('Invalid Email or Password')
        }
        
      
    }
  render() {
    return (
        <div>
            <form action="" onSubmit={this.loginSubmit}>
                <input type="text" placeholder='Email' value={this.state.email} onChange={this.emailChange} />
                <input type="password" placeholder='Password' value={this.state.password} onChange={this.passChange}/>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
  }
}

export default Login;
