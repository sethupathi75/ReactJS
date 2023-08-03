import React, { Component } from 'react';

class Table extends Component {
  render() {
      var row=[]
      var l=[{"roll":"1","name":"abu","warn":2,"mal":"yes","rank":2,"result":3},{"roll":"2","name":"abu","warn":2,"mal":"yes","rank":2,"result":3},{"roll":"3","name":"abu","warn":2,"mal":"yes","rank":2,"result":3},{"roll":"4","name":"abu","warn":2,"mal":"yes","rank":2,"result":3},{"roll":"5","name":"abu","warn":2,"mal":"yes","rank":2,"result":3},{"roll":"6","name":"abu","warn":2,"mal":"yes","rank":2,"result":3},{"roll":"7","name":"abu","warn":2,"mal":"yes","rank":2,"result":3},{"roll":"8","name":"abu","warn":2,"mal":"yes","rank":2,"result":3},{"roll":"9","name":"abu","warn":2,"mal":"yes","rank":2,"result":3}]
        for (var i of l)
        {
            row.push(<tr>
                <th scope="row">{i.roll}</th>
                <td>{i.name}</td>
                <td>{i.warn}</td>
                <td>{i.mal}</td>
                <td>{i.rank}</td>
                <td>{i.result}</td>
            </tr>)
        }
    return (
      <div>
          <div class="container">
              <div class="row col-12">
                    <h1 class="mx-auto font">SCORE-BOARD</h1>
              </div>
              <table class="table mt-5 table-striped">
                <thead class="bg-primary">
                    <tr>
                    <th scope="col">ROLL NO</th>
                    <th scope="col">CANDITATE NAME</th>
                    <th scope="col">WARNING</th>
                    <th scope="col">MALPRACTICE</th>
                    <th scope="col">RANK</th>
                    <th scope="col">RESULT</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {
                        row
                    }
                </tbody>
                </table>
          </div>
    
    </div>
    );
  }
}

export default Table;
