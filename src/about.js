import React, { Component } from 'react';
import './index.css';
// import News from './news';
// import Form from './form';
class Cal extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:'',
         count:0
      };
    };
    
    // componentDidMount(){
    //   // this.setState({data:this.props.getData1})
    //   console.log(this.props.getData1)s
      
    // }
    get=()=>{
      this.setState({count:this.state.count+1})
      console.log(this.props.getData1)
      
      
    }


  render() {
    return (
      <> 
      {/* <button class="btn mr-4 btn-primary float-right" type="button" data-toggle="modal" data-target="#modal1" >modal</button>
      <button onClick={this.get} className='btn ml-5 btn-primary'>getdata</button> */}
      
      <nav class=" navbar over sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className='container'>
      
            <a class="navbar-brand  align-middle" href="#">
                <img src="https://images.livemint.com/img/2021/02/25/1600x900/newspaper_1614272767818_1614272772075.jpeg" height="60" width="40" alt="" />
                NEWS</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target='#se'>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse  navbar-collapse" id="se">
        <ul class="navbar-nav ml-auto ">
            <li class="nav-item ">
            <a href='#' class="btn mr-4 btn-outline-secondary nav-link" type="button" data-toggle="modal" data-target="#modal1" >modal</a>
            
            </li>
        
            <li class="nav-item">
            <a href='#' onClick={this.get} className='btn nav-link btn-outline-secondary  ml-5'>getdata</a>
            </li>
            
            <li class="nav-item">
            <a class=" nav-link " href="#list-item-1">Item 1</a>
            </li>
            <li class="nav-item">
            <a class=" nav-link " href="#list-item-2">Item 2</a>
            </li>
            <li class="nav-item">
            <a class=" nav-link " href="#list-item-3">Item 3</a>
            </li>
            <li class="nav-item">
            <a class=" nav-link " href="#list-item-4">Item 4</a>
            </li>
            
            
           
      </ul>
      </div>
      </div>
      </nav>
     
     


          {
            
            this.props.getData1.map(e =>
            <div className='container '>
          <div className="card shadow-lg d-print-flex m-5">
          <div className="row">
          <div class="col-md-4">
            <img src={e.image} class="card-img img-thumbnail rounded" alt="image" />
          </div>
            <div className="card-body col-8">
              <h1 className="card-title  h-4 text-primary ">{e.title}</h1>
              <p className="card-text text-danger mt-5">{e.article}</p>
              <p className="text-muted float-right">{e.time}</p>
            </div>
            
            
          </div>
          
              
        </div>
        </div>      
              
            )
            
           
            
          }
          
       



          
<div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
  <h4 id="list-item-1">Item 1</h4>
  <p>Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor eu consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in. Aliqua et aliqua officia quis et incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt mollit dolore. Aliquip nulla enim veniam non fugiat id cupidatat nulla elit cupidatat commodo velit ut eiusmod cupidatat elit dolore.</p>
  <h4 id="list-item-2">Item 2</h4>
  <p>..Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor eu consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in. Aliqua et aliqua officia quis et incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt mollit dolore. Aliquip nulla enim veniam non fugiat id cupidatat nulla elit cupidatat commodo velit ut eiusmod cupidatat elit dolore..</p>
  <h4 id="list-item-3">Item 3</h4>
  <p>..Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor eu consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in. Aliqua et aliqua officia quis et incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt mollit dolore. Aliquip nulla enim veniam non fugiat id cupidatat nulla elit cupidatat commodo velit ut eiusmod cupidatat elit dolore..</p>
  <h4 id="list-item-4">Item 4</h4>
  <p>..Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor eu consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in. Aliqua et aliqua officia quis et incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt mollit dolore. Aliquip nulla enim veniam non fugiat id cupidatat nulla elit cupidatat commodo velit ut eiusmod cupidatat elit dolore..</p>
</div>







<div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
  <h4 id="list-item-1">Item 1</h4>
  <p>Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor eu consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in. Aliqua et aliqua officia quis et incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt mollit dolore. Aliquip nulla enim veniam non fugiat id cupidatat nulla elit cupidatat commodo velit ut eiusmod cupidatat elit dolore.</p>
  <h4 id="list-item-2">Item 2</h4>
  <p>..Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor eu consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in. Aliqua et aliqua officia quis et incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt mollit dolore. Aliquip nulla enim veniam non fugiat id cupidatat nulla elit cupidatat commodo velit ut eiusmod cupidatat elit dolore..</p>
  <h4 id="list-item-3">Item 3</h4>
  <p>..Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor eu consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in. Aliqua et aliqua officia quis et incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt mollit dolore. Aliquip nulla enim veniam non fugiat id cupidatat nulla elit cupidatat commodo velit ut eiusmod cupidatat elit dolore..</p>
  <h4 id="list-item-4">Item 4</h4>
  <p>..Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor eu consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in. Aliqua et aliqua officia quis et incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt mollit dolore. Aliquip nulla enim veniam non fugiat id cupidatat nulla elit cupidatat commodo velit ut eiusmod cupidatat elit dolore..</p>
</div>



      {/* <a href='/news'>add</a>
       <a href='/form'>add</a>
       
        <Router>
       <switch>
            
            <Route path='/news' component={News} />
            <Route  path='/form' component={Form}/>
            </switch>
        </Router> */}

        
      
       
      </>
    );
  }
}

export default Cal;
