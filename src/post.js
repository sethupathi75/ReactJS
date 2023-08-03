import React, { Component } from 'react';
import axios from 'axios'
class Post extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userid:'',
         title:'',
         body:''
      };
    };
    
   
    //   componentDidMount(){
    //     var request=new XMLHttpRequest();
    // request.open("GET","https://restcountries.eu/rest/v2/all",true);
    // request.send();
    // request.onload=()=>{
    //     var data=JSON.parse(request.response)
    //     this.setState({datas:data})
    // }   
    // }



    change=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }


    submit=(e)=>{
        e.preventDefault();
        console.log(this.state)
    axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
    
    .then(response=>{
        console.log(response)   
        
    })
    .catch(error=>{
        console.log('error')
    })}
    

  render() {
    var {userid,title,body}=this.state
    
    return (
        
      <>
      <form onSubmit={this.submit}>
      <label>userid</label><input type='text' name='userid' value={userid} onChange={this.change}></input>
      <label>title</label><input type='text' name='title' value={title} onChange={this.change}></input>
      <label>body</label><input type='text' name='body' value={body} onChange={this.change}></input>
      <input type='submit' value='submit' ></input>
      </form>
      </>
    );
  }
}

export default Post;