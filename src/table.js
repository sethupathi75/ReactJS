import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div>
          <div className="container">
              <div className="row">
                    <div className="col-12">
                    <table class="table table-dark rounded mt-5 table-bordered table-info table-hover">
            <thead class="bg-success">
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>VOTE AGE</th>
                    <th>Edit</th>
                    <th>Delete</th>
                          
                </tr>
            </thead>
            <tbody>
                {
                    // console.log(this.props.getData) 
                    this.props.getData.length>0 ?
                    
                        this.props.getData.map(e=>
                        <tr>
                            <td>{e._id}</td>
                            <td>{e.Name}</td>
                            <td>{e.Age}</td>
                            <td>{e.Vote}</td>
                            <td><button className="btn btn-primary d-block">Edit</button></td>
                            <td><button className="btn btn-primary d-block" onClick={event=>this.props.setData(e)}>Delete</button></td>
                        </tr>)
                    
                    :
                    
                        <tr>
                            <td>no data</td>
                            
                        </tr>
                    
                }
            </tbody>
        </table>
                    </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Table;
