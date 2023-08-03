import React, { Component } from 'react';
import './static.css';
class Addpage extends Component {
  render() {
    return (
      <>
    <div className="container">
      <div className="row">  
        <div className="card mx-auto bord sm-col-12 round col-5  mt-5 bg-light">
            <div className="card-header  pg-success font text-center">
                ADDITIONAL INFO
            </div>
                <div class="card-body bord1 round shadow-lg">
                    <form  autoComplete="off">
                        <div className="form-group">
                            <label for="Subject Name" class="font" >Subject Name</label>
                            <input type="text" className="form-control box-font round"   name='Subject Name' placeholder="Subject Name"    required />
                            <small  class="form-text text-danger"><strong></strong></small>
                        </div>
                        
                        <div className="form-group">
                            <label for="Subject Code" class="font">Subject Code</label>
                            <input type="text" className="form-control box-font round" placeholder="Subject Code"  name='Subject Code' required />
                        <small class="form-text text-danger "></small>
                        </div>
                        <div className="form-group">
                            <label for="Cantidates" class="font">No.of Cantidates Attend</label>
                            <input type="number" className="form-control box-font round" placeholder="No.of Cantidates Attend"  name='Cantidates'    required />
                        </div>
                        <div className="form-group">
                            <label for="code" class="font" >Access Code</label>
                            <input type="text" className="form-control box-font round" placeholder="Access Code"  name='code'    required />
                        </div>
                        <div className="form-group">
                            <label for="Duration" class="font">Test Duration</label>
                            <input type="time" className="form-control box-font round" placeholder="Test Duration"  name='Duration'    required />
                        </div>
                        <div className="form-group col-12">
                            <input type='submit' value='Submit' className='btn font sm-col-12 col-4 round btn-primary form-control'/>
                            <input type='submit' value='Cancel' className='btn font float-right round col-4 btn-primary form-control'/>
                        </div>
                    </form>
                </div>
        </div>
    </div>
      </div>
      </>
      
    );
  }
}

export default Addpage;
