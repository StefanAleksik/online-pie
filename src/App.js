import React from "react";
import "./App.css";
import Pie from "./components/Pie/Pie";
import Godfather from "./components/Godfather/Godfather";
import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Godfather} />
          <Route path="/pie" component={Pie} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
