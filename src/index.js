import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link, NavLink} from 'react-router-dom';
import './index.css';
// import Old from './Old';
// import Cal from './about';
// import Bind from './bind';
// import Ref from './ref';
// import Inc from './increment';
// import Api from './api';
// import User from './user'
import Asses from './asses';
// import Post from './post';
import Hook from './hook';
// import Life from './hook';
// import Form from './frontend/form';
// import Table from './frontend/table';
// import Login from './frontend/login';
// import Tab from './frontend/tab';
import Moral from './moral';
import News from './news';
// import Table from './table';
// import Form from './form';
// import axios from 'axios';


// class App extends React.Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          data:{}
//       };
//     };
    

//   // Data=(event)=>{
//   //   axios.post('http://localhost:2001/person',event).then(res=>{
//   //     console.log(res)
//   //     this.getAll()
//   //   })
//   // }

//   // componentDidMount(){
//   //       this.getAll();
//   // }
//   // getAll(){
//   //     axios.get('http://localhost:2001/person').then(res=>{
//   //       this.setState({data:res.data})
//   //     })
//   // }
//   // delete=(e)=>{
   
//   //   axios.delete('http://localhost:2001/person/'+e._id).then(res=>{
//   //       this.getAll()
//   //       console.log(e._id)
//   //     })
//   // }
//   render() {
//     return (
//       <>
//   {/* <Bind /> */}
//   {/* <Old /> */}
//   {/* <Ref ></Ref> */}
//   {/* <Inc /> */}
//   {/* <Api /> */}
//   {/* <Post /> */}
//     {/* <Router>
      
//     <Route exact path='/api' component={Api} ></Route>
//     <Route exact path='/old' component={Old} ></Route>
//     </Router> */}
//     {/* <a href='/old'>old</a>
//     <a href='/api'>old</a> */}
//     {/* <div className="container">
//       <div className="row">
//         <div className="col-6">
//         <Form Data={this.Data} />
//         </div>
//         <div className="col-6">
//         <Table getData={this.state.data} setData={this.delete}/>
//         </div>
//       </div>
//     </div> */}
    
//     <Router>
//             <Route exact path='/tab' component={Tab}  />
//             <Route exact path='/' component={Login}  />
//             <Route exact path='/form' component={Form}  />
//             <Route  path='/user' component={Table}  />
            
//     </Router>
//     {/* <Table getData={this.state.data} setData={this.delete}/> */}

//   {/* <Hook /> */}
//   </>
//     );
//   }
// }









//practice lifecycle

import Addpage from './wolfers/addPage';
import Attenance from './wolfers/attenance';
import Table from './wolfers/table';
// import React, { Component } from 'react';

class App extends React.Component {

//   constructor(props) {
//     super(props)
  
//     this.state = {
//        data:{}
//     };

//     this.data1=[]
//   };
  

//   // Data=(e)=>{
//   //   // this.setState({data:e})
//   //   console.log(this.data1)
//   //   this.data1.push(e)
//   //   // console.log(this.state.data)
//   //   // e.preventDefault();
//   // }
  render() {
    return (
      <div> 
        {/* <Life name="sethu"/>   */}
        {/* <Moral /> */}
        <News Detail={this.Data}/> 
        {/* <Cal getData1={this.data1} /> */}
        <Hook />
        {/* <Api /> */}
        <Asses />
        {/* <Router>
       
            
            <Route exact path='/' component={Asses}  />
            <Route  path='/user/:id/:name' component={User}  />
            
        </Router> */}
        {/* <Addpage /> */}
        {/* <Attenance /> */}
        {/* <Api /> */}
      </div>
    );
  }
}



ReactDOM.render(<App />,document.getElementById('root'));
