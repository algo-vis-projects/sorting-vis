import React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import { Merge, Insertion, Bubble } from './SortingAlgorithms';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/bubble">Bubble</Link>
        <Link to="/insertion">Insertion</Link>
        <Link to="/merge">Merge</Link>
      </div>
      <Route exact path="/merge" component={Merge} />
      <Route exact path="/insertion" component={Insertion} />
      <Route exact path="/bubble" component={Bubble} />
      <Route exact path="/" component={Bubble} />
    </div>
  );
}

export default App;
