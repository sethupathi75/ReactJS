import React from 'react';


import './index.css';

class Old extends React.Component
{
  constructor(){
    super();
    this.state={name:'sethu',age:34,err:'',err1:''}
    
  }
  change=(event)=>{
    let a=event.target.name
    let v=event.target.value
    let err,err1=""
    if (a==='name'){
        if (v!=="" && !Number(v))
        {
          err="invalid"
        }
      }
    else if (a==='pass')
    {
      if (v.includes('@') && v.length>=8){
        err1=''
      }

      else{
        err1='invalid '
      }
    }    

    this.setState({err:err,err1:err1})

  }
  
  render(){
    return <>
      <h1> {this.state.name}</h1>
      <div className="container">
      <div className="row">  
      <div className="card col-6 offset-3 bg-light">
      <form onClick={this.change}>
      <div class="form-group">
      <label for="exampleInputEmail1" >Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" name='name' ref={this.input}  placeholder="Enter email" />
      <small id="emailHelp" class="form-text text-danger"><strong>{this.state.err}</strong></small>
      </div>
      <div class="form-group">
      <label for="exampleInputEmail1">password</label>
      <input type="password" class="form-control" id="exampleInputEmail1" name='pass' aria-describedby="emailHelp"  placeholder="pass" />
      <small id="emailHelp" class="form-text text-danger text-primary"><strong>{this.state.err1}</strong></small>
      </div>
      <div className="form-group">
        <input type='submit' value='click' className='btn btn-primary form-control'/>
      </div>
      </form>
      </div>
      </div>
      </div>
      </>
  }

}




export default Old ;