import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import Bar1 from './charts/bar_charts/Bar1/Bar1'
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
              <Route path="/bar1">
                <Bar1 />
              </Route>
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
