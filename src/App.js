import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import { MDCSlider } from '@material/slider';
import NotFound from "./components/NotFound.js";
import HomePage from "./components/HomePage.js";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  updateUser(user) {
    this.setState({ currentUser: user });
  }

  render() {
    return (
      <div>
        <header className="header">
          <nav>
            <NavLink exact to="/">
              <img className="App-logo" src={logo} alt="logo" />
            </NavLink>

            {this.state.currentUser ? (
              <span>
                <div className="User-connected">
                  <p>User Pseudo</p>
                  <img src="./logo.svg" alt="User-Img" />
                  {/* component mp-notif */}
                </div>
              </span>
            ) : (
                <span>
                  <NavLink to="/login-page">
                    <button>Log In</button>
                  </NavLink>
                </span>
              )}
          </nav>
        </header>
              
        <Switch>
          {/* Home Page route should always have EXACT on it */}

          {/* <Route exact path="/" component={HomePage}/> */}
          <Route exact path="/" render={() => {
            return <HomePage currentUser={this.state.currentUser} signupSuccess={user => this.updateUser(user)}/>
          }}/>
          <Route exact path="/countries" component={Search} />
          

          {/*  404 route should go LAST */}
          <Route component={NotFound} />
        </Switch>
      </div>
        
    );
  }
}

export default App;
