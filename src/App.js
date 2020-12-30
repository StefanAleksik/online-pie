import React from "react";
import "./App.css";
import Pie from './components/Pie/Pie'

class App extends React.Component {
  state = {
    pieData: [    ]
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-sm-3">Странично мени</div>
          <div className="col-sm-9">
            Пита
            <Pie pieData={this.state.pieData} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
