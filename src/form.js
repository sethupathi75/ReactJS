import axios from 'axios';
import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Name:'',
        Age:'',
        Vote:''
      };
    };

    onchange=event=>{
        var {name,value}=event.target
        // this.setState({})
        if(name==='Age' || name==='Name'){
          if(value>=18){
            this.setState({[name]:value,Vote:'major'})
          }
          else{
            this.setState({[name]:value,Vote:'minor'})
          }
        }
        
    }
    onSubmit=(event)=>{
        event.preventDefault();
        var data=this.state
        this.props.Data(data)    
    }
    
    

  render() {
    return (
      <div>
          <div className="container">
      <div className="row">  
      <div className="card col mt-5 bg-light">
      <form onSubmit={this.onSubmit} autoComplete="off">
      <div className="form-group">
        <label for="name" >name</label>
        <input type="text" className="form-control"  onChange={this.onchange} name='Name' value={this.state.name}   placeholder="name" />
      {/* <small id="emailHelp" class="form-text text-danger"><strong>{this.state.err}</strong></small> */}
      </div>
      <div className="form-group">
        <label for="age">age</label>
        <input type="text" className="form-control"  onChange={this.onchange} name='Age' value={this.state.age} aria-describedby="emailHelp"  placeholder="age" />
      {/* <small id="emailHelp" class="form-text text-danger text-primary"><strong>{this.state.err1}</strong></small> */}
      </div>
      <div className="form-group">
        <input type='submit' value='click' className='btn btn-primary form-control'/>
      </div>
      </form>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Form
