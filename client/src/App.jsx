import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import Ranking from './components/Ranking';
import Game from './components/Game';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Game} />
      <Route exact path="/ranking" component={Ranking} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
