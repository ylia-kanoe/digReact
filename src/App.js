import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { PageChampion } from './components/Page';
import { Product } from './components/Product';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path={window.location.pathname}>
            <PageChampion />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;