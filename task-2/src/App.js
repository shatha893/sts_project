import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Containers/Home/Home';

class App extends Component {

  render(){
    return (
      <Router>
      <Switch>
      <Route 
      path="/" 
      exact 
      render={()=><Home/>} />
      
      </Switch>
      </Router>
    );
  }
  
}

export default App;
