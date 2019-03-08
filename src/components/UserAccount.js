import React, { Component } from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import "./UserAccount.css";
import "../userDefault.svg";
import { getUserDetails } from "../api";
import ButtonUserProfile from "./ButtonUserProfile";
import { getCountries } from "../api.js";
import CountryFavList from "./CountryFavList";

import bgbgScreen from "../images/bgbg.svg"
import bgScreen from "../images/bg-screen.jpg"
class UserAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      isDeleteOpen: false,
      countryArray: []
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    getUserDetails(params.userName).then(response => {
      console.log("User", response.data);
      this.setState({ userInfo: response.data });
    });

    getCountries().then(response => {
      console.log("Countries", response.data);
      this.setState({ countryArray: response.data });
    });
  }

  deleteUser() {
    this.setState({ isDeleteOpen: true }); 
    
  }

  render() {
    const { userInfo } = this.state;
    console.log(this.state);
    return this.state.isDeleteOpen ? (
  
      <Redirect exact to="/" />
    )
    :
    (
      <div className="UserAccount">
          <section className="User-profile">
            
            <img src={bgScreen} alt="" className="bgScreen"/>
            <div className=" container">
          <div className="row user">
            <div className="User-visual col-5 text-center">
              <img src={userInfo.avatarURL} alt="User Profile " className="userAvatar" />
              <h2>{userInfo.name}</h2>
              <p>{userInfo.fullName}</p>
              <b>{userInfo.email}</b>
                <p>From : <b>{userInfo.location}</b></p>
                <p><i>{userInfo.age}</i> years old</p>
                <p><i>{userInfo.gender}</i></p>  
              
                <p>{userInfo.description}</p>

                <div className="buttons">
                  <Link to={`/account/${userInfo.name}/edit`}>
                    <button className="btn btn-primary">Edit your profile</button>
                  </Link>

                  <Link to={`/account/${userInfo.name}/delete`}>
                    <button className="btn btn-danger">Delete your profile</button>
                  </Link>
                </div>
            </div>
              <div className="User-info col-7">

                <Switch>
                  <Route
                    path="/account/:userName/edit"
                    render={() => {
                      return <ButtonUserProfile
                        userInfo={this.props.currentUser}
                        editSuccess={this.props.editSuccess} />;
                    }}
                  />


                  <Route
                    path="/account/:userName/delete"
                    render={() => {
                      return (
                        <div className="verif-delete text-center">
                          <h2>To confirm press the delete button</h2>
                          <button className="btn btn-dark" onClick={(deleteUser) => this.props.deleteSuccess(deleteUser)}>Delete</button>
                        </div>
                      );
                    }}
                  />

                  <Route
                    path="/account/:userName"
                    render={() => {
                      return (
                        <section className="Fav-channels">
                          
                          <img src={bgbgScreen} alt="bg" className="w-100"/>
                        </section>
                      );
                    }}
                  />

                </Switch>
                </div>
              </div>
          </div>

       
        </section>
        {/*end section user-profile */}
        

      </div>
    );
  }
}

export default UserAccount;
