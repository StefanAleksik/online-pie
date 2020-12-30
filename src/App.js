import React from "react";
import "./App.css";
import Pie from "./components/Pie/Pie";
import Godfather from './components/Godfather/Godfather'
import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends React.Component {
  state = {
    pieData: [],
  };

  addParticipant = (participant) => {
    let pieData = [...this.state.pieData];
    pieData.push({...participant})
    console.log(pieData)
    this.setState({pieData})
  }

  render() {
    return (  
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={(props) => <Godfather {...props} pieData={this.state.pieData} addParticipant={this.addParticipant} />} /> 
            <Route path='/pie' render={(props) => <Pie {...props} pieData={this.state.pieData} />} /> 
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;


{/* <div className="row">
          <div className="col-sm-4">
            <Godfather pieData={this.state.pieData} addParticipant={this.addParticipant} />
          </div>
          <div className="col-sm-6">
            Пита
            <Pie pieData={this.state.pieData} />
          </div>
          <div className="col-sm-2">2</div>
        </div> */}