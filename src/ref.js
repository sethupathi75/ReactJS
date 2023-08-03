import React, { Component } from 'react';

class Ref extends Component {
    constructor(props) {
      super(props)
    
      this.input=React.createRef()
    };
    componentDidMount(){
        this.input.current.focus()
      }  
    render() {
        return (
        <div> 
            <input type='text' ref={this.input}></input>
        </div>
        );
    }
}

export default Ref;
