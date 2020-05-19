import React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import { Merge, Insertion, Bubble } from './SortingAlgorithms';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/merge">Merge</Link>
        <Link to="/insertion">Insertion</Link>
        <Link to="/bubble">Bubble</Link>
      </div>
      <Route path="/merge" component={Merge} />
      <Route path="/insertion" component={Insertion} />
      <Route path="/bubble" component={Bubble} />
    </div>
  );
}

export default App;
