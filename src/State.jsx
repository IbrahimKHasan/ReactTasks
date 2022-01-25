import React, { Component } from 'react';
export class State extends Component {
  constructor(props){
      super(props);
      this.state={
          name:this.props.title,
      }
  }  
  change = ()=>{
    this.setState ({
        name:"JSX"
    })
  }
  render() {
    return (

    <section>
        <div>{this.state.name}</div>
        <button onClick={this.change}>Click</button>
    </section>

    );
  }
}

export default State;
