import React, { Component } from 'react';

class Inc extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0
      };
    };
    change=()=>{
        this.setState((prev)=>{
            return ({count:prev.count+1})
        })
    }

  render() {
    return (
      <button onClick={this.change}>click {this.state.count}</button>
    );
  }
}

export default Inc;
