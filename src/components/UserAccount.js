import React, { Component } from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";

import "./UserAccount.css";
import "../userDefault.svg";
import { getUserDetails } from "../api";
import ButtonUserProfile from "./ButtonUserProfile";

class UserAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {}
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    getUserDetails(params.userName).then(response => {
      console.log("User", response.data);
      this.setState({ userInfo: response.data });
    });
  }

  deleteProfile() {


  }

  render() {
    const { userInfo, isEditOpen } = this.state;

    console.log(userInfo);
    const { currentUser } = this.props;
    
    
    return (
      <div className="UserAccount">
        <section className="User-profile">
          <ul>
            <li className="User-visual">
              <img src={userInfo.avatarURL} alt="User Profile " />
              <h2>{userInfo.name}</h2>
              <p>{userInfo.fullName}</p>
              <b>{userInfo.email}</b>
            </li>
            <li className="User-info">
              <b>{userInfo.location}</b>
              <p>
                <i>{userInfo.age}</i>
                <i>{userInfo.gender}</i>
              </p>
              <p>{userInfo.description}</p>
            </li>
          </ul>

        
            <div>
              <Link to={`/account/${userInfo.name}/edit`}>
                Edit your profile
              </Link>

              <Link to={`/account/${userInfo.name}/delete`}>
                Delete your profile
              </Link>
            </div>

       
        </section>{" "}
        {/*end section user-profile */}
        <Switch>
          <Route
            path="/account/:userName/edit"
            render={() => {
              return <ButtonUserProfile
                userInfo={currentUser} 
                editSuccess={this.props.editSuccess} />;
            }}
          />
          <Route
            path="/account/:userName/delete"
            render={() => {
              return (
                <div className="verif-delete">
                  <h2>To confirm press the delete button</h2>
                </div>
              );  
            }}
          />
          />
        </Switch>
        <section className="Fav-channels">
          <h2>Favorites Channels</h2>
          {/* <ul>
                        {phoneArray.map(onePhone => {
                            return (
                                <li key={onePhone._id}>
                                    <h3>
                                        <Link to={getPhoneAddress(onePhone)}>{onePhone.phoneModel}</Link> </h3>
                                    <p>{onePhone.brand}</p>
                                    <p>{onePhone.price}</p>
                                    <img src={onePhone.image} />
                                </li>
                            )
                        })}

                    </ul> */}
        </section>

      </div>
    );
  }
}

export default UserAccount;
