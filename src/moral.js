import React, { Component } from 'react';

class Moral extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fname:'',
         lname:'',
         district:'',
        //  Data1:[]
      };
      this.Data=[]
    };
    
    change=(e)=>{
        const {name,value}=e.target
        this.setState({[name]:value})
    }
    submit=(e)=>{
        
        var data=this.state
        this.Data.push(data)
        // console.log((this.Data))
        // this.setState({Data:data})
        // console.log((this.Data))
        console.log(this.Data.map(e=>{return (e.fname,e.lname)} ))
        // this.state.Data.map(e=>{console.log(e)})
        e.preventDefault()
       
        
    }

  render() {
    
    return (
        
      <div>
          <button class="btn-primary" type="button" data-toggle="modal" data-target="#modal1" >modal</button>
           { 
                this.Data.length>0 ?
                this.Data.map((e)=>
                <div>
                <p>{e.fname}</p>
                <p>{e.lname}</p>
                </div>)

                :
                <p>nodata</p>
           }
            {/* <p>{this.Data}</p> */}
          <div class="modal" data-backdrop="static" id="modal1">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                <p class="h4 modal-title">agreement</p>
                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <form class=""  onSubmit={this.submit}>
                <div class="form-row col-12">
                    <div class="form-group col-6">
                    <label for="name">LAST NAME : <span style={{color: "red"}}>*</span> </label>
                    <input type="text" id="name" class="form-control"  name='fname' onChange={this.change}  /></div>
                    <div class="form-group col-6">
                    <label for="name">FULL NAME : <span style={{color: "red"}}>*</span> </label>
                    <input type="text" id="name" class="form-control" name='lname' onChange={this.change} /></div>
                </div>
                <div class="form-group col-12">
                    <label for="name">EMAIL : <small class="text-muted">(optional)</small> </label>
                    <input type="email" id="name" class="form-control" /></div>
                    <div class="form-group col-12">
                    <label for="name">PHONE NUMBER  :  </label>
                    <input type="number" id="name" class="form-control" /></div>
                    <div class="form-row col-12">
                    <div class="form-group col-6">
                    <label for="name">ADDRESS LINE1 :  </label>
                    <input type="text" id="name" class="form-control" /></div>
                    <div class="form-group col-6">
                    <label for="name">ADDRESS LINE2 :<small class="text-muted">(optional)</small>  </label>
                    <input type="text" id="name" class="form-control" /></div>
                </div>
                <div class="form-row col-12">
                    <div class="form-group col-6">
                    <label for="state">STATE :<span style={{color: "red"}}>*</span>  </label>
                    <select id="state" class="form-control custom-select" >
                        <option selected value="">--select--</option>
                        <option value="">chennai</option>
                        <option value="">coimbatore</option>
                        <option value="">madurai</option>
                    </select>
                    </div>
                    <div class="form-group col-6">
                    <label for="name">DISTRICT :<span style={{color: "red"}}>*</span>  </label>
                    <select id="state" class="form-control custom-select" name='district' onChange={this.change}>
                        <option selected value="" >--select--</option>
                        <option value="">a</option>
                        <option value="">b</option>
                        <option value="">c</option>
                    </select></div>
                </div>
                
                
                <div class="form-row col-12">
                <div class="form-group ">
                    <div class="form-check">
                    <input type="radio" id="form" class="form-check-input"/>
                    <small class="form-check-label text-muted">please click this box</small>

                </div>
                </div>
                </div>
                <div class="form-group col-12">
                    <button type="submit" class="btn-outline-success form-control">submit</button>
                </div>

                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">Understood</button>
            </div>


                    </div>
                    </div>
                </div>
      </div>
    );
  }
}

export default Moral;
