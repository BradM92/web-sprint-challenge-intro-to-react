import React from 'react';
import './App.css';
import Character from "./components/Character";
import { Jumbotron} from 'reactstrap';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <Jumbotron>
    <div className="App">
      <h1 className="Header">React Wars Leaderboard</h1>
      
      <Character />
    </div>
    </Jumbotron>
  );
}

export default App;
