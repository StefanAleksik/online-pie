import React from "react";
import "./App.css";
import Pie from './components/Pie/Pie'

class App extends React.Component {
  state = {
    pieData: [
      { label: "Bozo", value: 1 },
      { label: "Laze", value: 1 },
      { label: "Tomi", value: 1 },
      { label: "Kate", value: 1 },
      { label: "Maca", value: 1 },
      { label: "Stef", value: 1 },
      { label: "Marche", value: 1 },
      { label: "Ante", value: 1 },
      { label: "Viski", value: 1 },
      { label: "Buli", value: 1 },
      { label: "Aleksikj", value: 1 },
    ]
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
