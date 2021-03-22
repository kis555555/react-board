import './App.css';
import { Component } from 'react';
import Main from "./main";
import Signup from "./account/signup";
import { BrowserRouter, Route } from 'react-router-dom'; //React-Router import
import Board_main from './board/board_main';
import Board_create from './board/board_create';
import Board_read from './board/board_read';

class App extends Component {
  render()
  {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" exact component={Main}/>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/board_main" exact component={Board_main}/>
          <Route path="/board_create" exact component={Board_create}/>
          <Route path="/board_read/:name" exact component={Board_read}/>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
