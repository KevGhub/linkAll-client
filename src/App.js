import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import AppMessenger from "./AppMessenger";
import { Switch, Route, NavLink } from "react-router-dom";
import NotFound from "./components/NotFound";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
<<<<<<< HEAD
      <section className="HomePage">
        <header>
          <nav>
            <img src="#" alt="logo" />
            <button> Log in </button>
          </nav>
        </header>
      </section>
=======
      <div>
        <header className="header">  
          <nav>
            <NavLink  exact to="/">
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

          
          {/*  404 route should go LAST */}
          <Route component={NotFound} />
        </Switch>
      </div>
>>>>>>> ac2d8cfea0b21c7151476226dbfc31b2984763f7
    );
  }
}

export default App;
