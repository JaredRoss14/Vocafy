import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NoMatch from "./pages/NoMatch";
import SplashScreen from "./pages/SplashScreen";
import Campaign from "./pages/Campaign";
import CampaignLandingPage from "./pages/CampaignLandingPage";
import Footer from "./components/Footer";
import Navheader from "./components/Navheader";
import Wrapper from "./components/Wrapper";
import axios from "axios";

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

        {/* Render nav based on logged in status */}
        <Navheader loggedIn={this.state.loggedIn} />
        <Switch>

          {/* Render homepage based on logged in status */}
          {this.state.loggedIn ? <Route exact path="/" component={Home} /> : <Route exact path="/" component={SplashScreen} />}
          
          {/* Login page that redirects to homepage when logged in */}
          <Route exact path="/login" render={() => this.state.loggedIn ? <Redirect to="/" /> : <Login userLoggedIn={this.userLoggedIn} />} />
          
          {/* Figure out sign up navigation */}
          <Route exact path="/signup" component={SignUp} />

          {/* Figure out campaign navigation */}
          {/* <Route exact path="/campaign" render={() => this.state.loggedIn ? <Campaign userLoggedIn={this.userLoggedIn} /> : <Redirect to="/" />} /> */}
          <Route exact path="/movement" component={Campaign} />

          {/* Find Campaign by URL */}
          <Route exact path="/movement/:id?" component={CampaignLandingPage} />

          
          {/* Style 404 page */}
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
