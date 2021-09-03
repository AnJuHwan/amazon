import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Payment from './components/Payment/Payment';
import { auth } from './firebase/firebase';
import Login from './Login/Login';
import { useStateValue } from './Store/StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const getAuth = auth;
    getAuth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/' exact>
            <Header />
            <Home />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/payment'>
            <Header />
            <Payment />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
