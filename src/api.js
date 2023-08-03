import React, { Component } from 'react';
import axios from 'axios'
class Api extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         datas:''
      };
    };
    

    componentDidMount(){
        var request=new XMLHttpRequest();
    request.open("GET","https://restcountries.eu/rest/v2/all",true);
    request.send();
    request.onload=()=>{
        var data=JSON.parse(request.response)
        this.setState({datas:data})
    }
        
    }
  render() {
    var {datas}=this.state
    console.log(datas)
    return (
        
      <div> {
          datas.length ?
        datas.map(data=><div>{data.name} <h1>{data.borders[0]}</h1>
        <img src={data.flag} className='img-fluid img-thumbnail h-25 w-25'></img>
        <hr className='p-50 border-primary gx-5 position-sticky'></hr></div>):null
        
        }
        
        <p>{this.datas}</p> 
        <p>Sethu</p>

        </div>
    );
  }
}

export default Api;





// axios.get('https://restcountries.eu/rest/v2/all')
//         .then(response=>{
//             console.log(response)
            
            
//             this.setState({datas:response.data})
            
            
//         })
//         .catch(error=>{
//             this.setState({datas:'error'})
//         })