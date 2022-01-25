import React, { Component } from 'react';

export class Register extends Component {
    constructor(props){
        super(props);
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

    formSubmit = (event)=>{
        if(localStorage.getItem('accounts')){
            let temp = JSON.parse(localStorage.getItem('accounts')) 
            temp.push({ email:this.state.email,password:this.state.password})
            localStorage.setItem('accounts',JSON.stringify(temp))
        }
        else { 
        let temp = [{ email:this.state.email,password:this.state.password}];    
        localStorage.setItem('accounts',JSON.stringify(temp)
    )
}
event.preventDefault();

    }
  render() {
    return (
        <div>
            <form action="" onSubmit={this.formSubmit}>
                <input type="text" placeholder='Email' value={this.state.email} onChange={this.emailChange}/>
                <input type="password" placeholder='Password' value={this.state.password} onChange={this.passChange}/>
                <input type="submit" value="Register" />
            </form>
        </div>
    );
  }
}

export default Register;
