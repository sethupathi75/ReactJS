import React, { Component } from 'react';
import { BrowserRouter as  Router,Route,Link } from 'react-router-dom';
import Cal from './about';
import Form from './form';
class News extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         title:'',
         article:'',
         time:'',
         image:''
        //  Data:[]
      };
      // this.Data=''
    };
    
    change=(e)=>{
        const {name,value}=e.target
        this.setState({[name]:value})
        // console.log(this.state)
        var d=new Date();
      this.setState({time:d.toLocaleString()})

    }
    submit=(e)=>{
      e.preventDefault()
      
        var data=this.state
        // this.state.Data.push(data)
        console.log(data)
        // this.setState({Data:data})
        // console.log((this.Data))
        // console.log(this.Data.map(e=>{return (e.fname,e.lname)} ))
        // this.state.Data.map(e=>{console.log(e)})
        this.props.Detail(data)
        
       
        
    }

  render() {
    return (
    <div>
      <div class="modal" data-backdrop="static" id="modal1">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header bg-primary">
                <p class="h4 modal-title ">NEWS</p>
                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
            <form onSubmit={this.submit} className="form-block">
            <div class="form-row col-12">
                    <div class="form-group col-12">
                    <label for="name">title : <span style={{color: "red"}}>*</span> </label>
                    <input type="text" id="name" class="form-control"  name='title' onChange={this.change}  /></div>
                    <div class="form-group col-12">
                    <label for="name">Article : <span style={{color: "red"}}>*</span> </label>
                    <textarea type="text" id="name" class="form-control" name='article' onChange={this.change} rows='5' cols='100'/></div>
                    
                    <div className="form-group col-12 ">
                      <label>Image</label>
                      <input type='url' id="name" className='d-block col-12' class="form-control" name='image' placeholder='please provide image link' onChange={this.change} />
                    </div>
                    <div className="form-group col-12">
                      <input type='submit' className='btn btn-success d-span' value='click' />
                    </div>
                    </div>
                    
                    
              
                </form>
            </div>
            
            
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">Understood</button>
            </div>


          </div>
          </div>
        </div>


















        {/* <form onSubmit={this.submit}>
       <label>title</label>
       <input type='title' onChange={this.change} name='title'></input>
       <hr></hr>
       <label>Article</label> 
       <textarea type='textarea' name='article' onChange={this.change} rows='5' cols='100'></textarea>
       <input type='submit' value='click' />
       </form> */}

       {/* <a href='/about'>add</a>
       <a href='/form'>add</a>
       
        <Router>
       <switch>
            
            <Route path='/about' component={Cal} />
            <Route  path='/form' component={Form}/>
            </switch>
        </Router> */}

        {/* <Cal getData1={{article:this.state.article,title:this.state.title}} /> */}
    </div>
    );
  }
}

export default News;
