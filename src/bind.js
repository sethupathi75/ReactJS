import React from 'react';
class Bind extends React.Component
{
    constructor(){
        super();
        this.state={
            msg:'welcome'
        }
        this.change=this.change.bind(this)
    }
    change=()=>{
        this.setState({msg:'gudbye'})
    }

    render(){
        return(
            <div>
                <p>${this.state.msg}</p>
                {/*<button onClick={this.change.bind(this)}>click</button>
                <button onClick={()=>this.change(this)}>click</button>
                <button onClick={this.change}>click</button>*/}
                <button onClick={this.change}>click</button>

            </div>
        )
    }
}
export default Bind


