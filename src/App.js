import React from "react";
import "./App.css";
import Pie from "./components/Pie/Pie";
import Godfather from './components/Godfather/Godfather'
import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends React.Component {
  state = {
    pieData: [],
    user:[]
  };

  addSlice = (slice) => {
    let pieData = [...this.state.pieData];
    pieData.push({...slice})
    this.setState({pieData})
  }

  addUser = (userData) => {
    let user = [...this.state.user];
    user.push({...userData})
    this.setState({user})
  }

  render() {
    return (  
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={(props) => <Godfather {...props} pieData={this.state.pieData} userData={this.state.user} addUser={this.addUser} addSlice={this.addSlice} />} /> 
            <Route path='/pie' render={(props) => <Pie {...props} pieData={this.state.pieData} />} /> 
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;