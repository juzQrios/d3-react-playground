import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import Bar from './charts/bar_charts/Bar';
import Bar1 from './charts/bar_charts/Bar1/Bar1';
import Bar2 from './charts/bar_charts/Bar2/Bar2';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>D3 React Playground</h1>
      </header>
        <Router>
          <div className="route">
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/bar" component={Bar} />
              <Route path="/bar/1" component={Bar1} />
              <Route path="/bar/2" component={Bar2} />
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
