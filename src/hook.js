import React, { useState,Component,useReducer,useEffect } from 'react';

var initial={name:'sethu'}
var reduce=(state,action)=>{
    console.log(state.name)
    switch(action.type){
        case 'incre':
            return {name:'pathi'}
        case 'dec':
            return {name:'sethu'}
        default:
            return state        
    }
}


function Hook() {
    
    // var [count,setcount]=useState({name:'sethu',age:12})
    var [count,dispatch]=useReducer(reduce,initial)
    // useEffect(()=>{
    //     document.title = `You click ${count}`;
    // })
    // var set=()=>setcount(count+1)
    var inc=()=>{
        dispatch({type:'incre'})
    }
    var dec=()=>{
        dispatch({type:'dec'})
    }
    return (
    //   <div>
    //       <h1>{count}</h1>
    //       <button onClick={()=>setcount(count+1)}>click</button>
    //       <button onClick={()=>setcount(count-1)}>click</button>
    //       <button onClick={()=>setcount(init)}>reset</button>
    // </div>

    //object in usestate:
    <>

    {/* <p>firstname:  {count.name}</p>
    <p>lastname:  {count.age}</p>
    <button onClick={()=>setcount({name:'pathi',age:count.age})}>click</button>
    <button onClick={(e)=>setcount({name:'sethu',age:'134'})}>reset</button> */}



{/* useffect */}
{/* <button onClick={set}>click {count}</button>
<button onClick={()=>{prompt('enter value')}} className="btn btn-primary" ><i class="fa fa-car " style={{fontSize:"100px"}}></i> prompt</button>
{
    document.createElement('p').innerHTML='para'
} */}
{/* useReducer */}
    <h1>{count.name}</h1>
    <button onClick={inc}>inc</button>
    <button onClick={dec}>dec</button>
    </>
    );
  
}
export default Hook;


// class Life extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          value:"3",
//          true:''
//       };
//     };
    

//     componentWillMount(){
//         alert("willmount")
//        }
//     componentDidMount(){
//         alert("didmount")
//         this.setState({value:'5',true:true})
//     }
    
//     componentWillUpdate(){
//         alert('willupdate')
        
//     }

//     componentDidUpdate(){
//         document.getElementById('root1').innerHTML='success'
//     }

//     // change=()=>{
//     //     this.setState({value:7})
//     // }
    
//     shouldComponentUpdate(){
//         return this.state.true
//     }

//   render() {
//     return (
//         <>
//       <div> lifecycle {this.props.name} {this.state.value} </div>
      
//       <button onClick={this.change}>change</button>
//       </>
//     );
//   }
// }

// export default Life;


