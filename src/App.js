import './App.css';
import { Component } from 'react';
import Main from "./main";
import Signup from "./account/signup";
import { BrowserRouter, Route } from 'react-router-dom'; //React-Router import

class App extends Component {
  render()
  {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" exact component={Main}/>
          <Route path="/signup" exact component={Signup}/>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
