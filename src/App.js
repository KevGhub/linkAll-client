import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import NotFound from "./components/NotFound.js";
import HomePage from "./components/HomePage.js";
import Search from "./components/Search";
import { getLogOut } from "./api";
import { postUserDelete } from "./api";
import UserAccount from "./components/UserAccount";
import AppMessenger from "./components/AppMessenger.js";

function getUseraddress(user) {
  return `/account/${user.name}`;
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
      //favorite channels
      
    } else {
      // delete the user info fron localStorage if he's log out
      localStorage.removeItem("currentUser");
    }

    this.setState({ currentUser: newUser });
  }

  favInitialState() {
    // Extract the favorite locations from local storage
    var favorites = [];

    if (localStorage.favorites) {
      favorites = JSON.parse(localStorage.favorites);
    } else {
      localStorage.removeItem("favorites");
    }
    
    this.setState({ favorites: favorites });
  }
  
  toggleFavorite(countries) {

    if (this.isAddressInFavorites(countries)) {
      this.removeFromFavorites(countries);
    }
    else {
      this.addToFavorites(countries);
    }

  }

  addToFavorites(countries) {

    var favorites = this.state.favorites;

    favorites.push({
      countries: countries,
      timestamp: Date.now()
    });

    this.setState({
      favorites: favorites
    });

    localStorage.favorites = JSON.stringify(favorites);
  }

  removeFromFavorites(countries) {

    var favorites = this.state.favorites;
    var index = -1;

    for (var i = 0; i < favorites.length; i++) {

      if (favorites[i].countries == countries) {
        index = i;
        break;
      }

    }

    // If it was found, remove it from the favorites array

    if (index !== -1) {

      favorites.splice(index, 1);

      this.setState({
        favorites: favorites
      });

      localStorage.favorites = JSON.stringify(favorites);
    }

  }

  isAddressInFavorites(countries) {

    var favorites = this.state.favorites;

    for (var i = 0; i < favorites.length; i++) {

      if (favorites[i].countries == countries) {
        return true;
      }

    }

    return false;
  }

  LogoutClick() {
    getLogOut().then(response => {
      console.log("Log Out", response.data);
      this.updateUser(null);
    });
  }

  deleteProfile() {
    postUserDelete().then(response => {
      console.log("DELETED", response.data);
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
                    {this.state.currentUser.name}
                    <img
                      src={this.state.currentUser.avatarURL}
                      alt="User-Img"
                    />
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
          
          <Route
            exact
            path="/"
            render={() => {
              return (
                <HomePage
                  currentUser={this.state.currentUser}
                  signupSuccess={user => this.updateUser(user)}
                  loginSuccess={user => this.updateUser(user)}
                  favListImport={() => this.favInitialState()}
                />
              );
            }}
          />
          <Route path="/countries" component={Search} />
          <Route
            path="/account/:userName"
            render={props => {
              return (
                <UserAccount
                  currentUser={this.state.currentUser}
                  editSuccess={user => this.updateUser(user)}
                  deleteSuccess={user => this.updateUser(user)}
                  match={props.match}
                />
              );
            }}
          />
          <Route
            path="/linkall-messenger"
            render={() => {
              return <AppMessenger currentUser={this.state.currentUser} />;
            }}
          />

          {/*  404 route should go LAST */}
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
