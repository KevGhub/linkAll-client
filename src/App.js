import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import NotFound from "./components/NotFound.js";
import HomePage from "./components/HomePage.js";
import Search from "./components/Search";
import { getLogOut } from './api'
import UserAccount from "./components/UserAccount";

function getUseraddress(user) {
  return `/account/${user.pseudo}`;
}

class App extends Component {
  constructor(props) {
    super(props);
    let userInfo = localStorage.getItem("currentUser");
    if (userInfo) {
      // turn the string back into an object if he's logged in
      userInfo = JSON.parse(userInfo);
    }
    this.state = {
      currentUser: userInfo
    };
  }

  updateUser(newUser) {
    console.log("hello", newUser, localStorage.getItem("currentUser"));

    if (newUser) {
      //save the user info in localstorage if he's log in
      //(turn it into JSON string before saving)
      localStorage.setItem("currentUser", JSON.stringify(newUser));
    } else {
      // delete the user info fron localStorage if he's log out
      localStorage.removeItem("currentUser");
    }

    this.setState({ currentUser: newUser });
  }

  LogoutClick() {
    getLogOut().then(response => {
      console.log("Log Out", response.data);
      this.updateUser(null);
    });
  }



  render() {
    return (
      <div className="App">
        <header className="header">
          <nav>
            <NavLink exact to="/">
              <img className="App-logo" src={logo} alt="logo" />
            </NavLink>

            {this.state.currentUser ? (
              <span>
                <div className="User-connected">
                  <NavLink to={getUseraddress(this.state.currentUser)}>
                    {this.state.currentUser.pseudo}
                    <img src={this.state.currentUser.profileImg} alt="User-Img" />
                  </NavLink>
                
                {/* component mp-notif */}
                </div>
                <div className="User-out">
                  <button onClick={() => this.LogoutClick()}>Log Out</button>
                </div>
              </span>
            ) : (
              <span>
                <NavLink to="/">
                  <button>Log In</button>
                </NavLink>
              </span>
            )}
          </nav>
        </header>

        <Switch>
          {/* <Route exact path="/" component={HomePage}/> */}
          <Route
            exact
            path="/"
            render={() => {
              return (
                <HomePage
                  currentUser={this.state.currentUser}
                  signupSuccess={user => this.updateUser(user)}
                  loginSuccess={user => this.updateUser(user)}
                />
              );
            }}
          />
          <Route path="/countries" component={Search} />
          <Route path="/account/:userPseudo" render={props => {
            return <UserAccount
              currentUser={this.state.currentUser}
              match={props.match} />;
          }}/>
         
          {/*  404 route should go LAST */}
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
