import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NoMatch from "./pages/NoMatch";
import SplashScreen from "./pages/SplashScreen";
import Footer from "./components/Footer";
import Navheader from "./components/Navheader";


const App = () => (
  <Router>
    <div>
      <Navheader />
      <Switch>
        <Route exact path="/" component={SplashScreen} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp}/>
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>  
  </Router>  
);

export default App;
