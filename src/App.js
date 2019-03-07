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
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import $ from 'jquery';




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
      currentUser: userInfo,
      // favorites: []
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

  onClickLog() {
    $('#closeModal').click(function () {
      $('#exampleModal').modal('hide')
    });
  }

  onClickSign() {
    $('#closeModal').click(function () {
      $('#exampleModal2').modal('hide')
    });
  }


  isCountryInFavorites(countries) {

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
        <header className="header w-100">
          <nav className=" w-100 navbar navbar-light bg-light">
            <NavLink className="navbar-brand" exact to="/">
              <img className="App-logo" src={logo} alt="Country Chat logo" />
            </NavLink>
            {this.state.currentUser ? (
              <div className="userLogged d-flex align-items-center">

                <div className="User-out d-flex align-items-center">

                  <p className="userName">  Welcome  <b>{this.state.currentUser.name}</b>
                  </p>
                  <button className="btn btn-outline-success my-2 my-sm-0 btnLogout" onClick={() => this.LogoutClick()}>Log Out</button>
                  <NavLink to={getUseraddress(this.state.currentUser)}>
                    <img
                      src={this.state.currentUser.avatarURL}
                      alt="User-Img"
                      className="userImg"
                    />
                  </NavLink>

                  {/* component mp-notif */}
                </div>
              </div>
            ) : (
                
                <div className ="buttons">
                  <button type="button" className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#exampleModal2">Sign up</button>
                 
                    <button type="button" className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#exampleModal">Log In</button>
                 
                </div>
              )}

            


<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title" id="exampleModalLabel">You are at few steps to chat with awsome people</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <LoginForm
                      currentUser={this.state.currentUser}
                      loginSuccess={user => this.updateUser(user)}
                      onClickLog={() => this.onClickLog()}
                    />
      </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <SignupForm
                      currentUser={this.state.currentUser}
                      signupSuccess={user => this.updateUser(user)}
                      onClickSign={() => this.onClickSign()}
                    />
                  </div>
                </div>
              </div>
            </div>

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
                 
                  favListImport={() => this.favInitialState()}
                  toggleFav={() => this.toggleFavorite()}
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
                  favListImport={() => this.favInitialState()}
                  toggleFav={() => this.toggleFavorite()}
                  match={props.match}
                />
              );
            }}
          />
          <Route
            path="/linkall-messenger/:countryName/:roomName"
            render={props => {
              return (
                <AppMessenger
                  match={props.match}
                  currentUser={this.state.currentUser}
                />
              );
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
