import React,{useEffect} from 'react';
import './App.css';
import Header from'./Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout'
import Payment from'./Payment';
import Login from'./Login';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise=loadStripe("pk_test_51HQhHGHHy8s0L0pr6tplu4Vg0mLS0l1nimEin5eUNNm9iLdJC3S4x8Y5xsiO4HCyHSIFrPQX6cAL4vOKAdqmdIMm00DFR051a6");
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
    <div className="app">
      <Switch>
      <Route path="/orders">
          <Header />
          <Orders />
          
      </Route> 
      <Route path="/login">
          <Header />
          <Login />
          
      </Route> 
        
      <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
            <Header />            
            <Elements stripe={promise}>
              <Payment />
            </Elements>
        </Route>        
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
