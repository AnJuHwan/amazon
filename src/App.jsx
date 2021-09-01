import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path='/' exact>
            <Header />
            <Home />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
