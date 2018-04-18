import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NoMatch from "./pages/NoMatch";
import SplashScreen from "./pages/SplashScreen";
import Campaign from "./pages/Campaign";
import Footer from "./components/Footer";
import Navheader from "./components/Navheader";
import Wrapper from "./components/Wrapper";
import axios from "axios";
import NavheaderLog from "./components/NavheaderLog";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: ''
    }
  }

  componentDidMount() {
  axios.get('/user/loggedIn')
    .then(res => {
    this.setState({ loggedIn: true, username: res.data.username });
    })
    .catch(err => this.setState({ loggedIn: false }));
  };

  userLoggedIn = (username) => {
    this.setState({ loggedIn: true, username });
  }

  logOut = () => {
    axios.get('/user/logout')
    .then(res => {
      this.setState({ loggedIn: false })
    });
  }

render() {
return (  
  <Router>
    <div>
      <Wrapper>
        <Navheader loggedIn={this.state.loggedIn} />
          <Switch>
            <Route exact path="/" component={SplashScreen} />
            <Route exact path="/home" component={Home} />
          <Route exact path="/login" render={() => <Login userLoggedIn={this.userLoggedIn} />} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/campaign" component={Campaign} />
          <Route component={NoMatch} />
          </Switch>
        </Wrapper>
      <Footer />
    </div>  
  </Router>  
);
}  
}
export default App;
