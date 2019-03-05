import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

import "./UserAccount.css";
import "../userDefault.svg";
import { getUserDetails } from "../api";
import { deleteUserProfile } from "../api";
import ButtonUserProfile from './ButtonUserProfile';


class UserAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
        }
    }

    componentDidMount() {

        const { params } = this.props.match;
        
        getUserDetails(params.userPseudo)
            .then(response => {
                console.log("User UPDATE", response.data);
                this.setState({ userInfo: response.data })
            })
        
    }

    deleteClick() {
        console.log(this.props.match.params.userPseudo, "eeeeeee");
    
        deleteUserProfile(this.props.match.params.userPseudo).then(response => {
            console.log("Delete", response.data);
            this.setState({ isDelete: true });
            this.props.onUserDelete();
        });
    }

    deleteSuccess() {
        const { params } = this.props.match;
console.log(params);

        deleteUserProfile(params.userPseudo)
            .then(response => {
                console.log("User DELETED", response.data);
            })
    }


    render() {
       
        const { currentUser } = this.props;
        
        console.log("USER INFO: ", currentUser);

        return this.state.isDelete ? (
          
             <Redirect exact to="/" />
        )
            :
        (
            <div className="UserAccount">
                
                <section className="User-profile">
                    <ul>
                        <li className="User-visual">
                            <img src={currentUser.profileImg} alt="User Profile " />
                            <h2>{currentUser.pseudo}</h2>
                        </li>
                        <li className="User-info">
                            <b>{currentUser.location}</b>
                            <p><i>{currentUser.age}</i></p>
                            <p>{currentUser.description}</p>
                        </li>
                    </ul>

                    <div>
                        <Link to={`/account/${currentUser.pseudo}/edit`}>Edit your profile</Link>
        
                        <Link to={`/account/${currentUser.pseudo}/delete`}>Delete your profile</Link>
                    </div>
    
                </section> {/*end section user-profile */}

                <Switch>
                    <Route exact path="/account/:userPseudo/edit" render={() => {
                        return <ButtonUserProfile userInfo={currentUser} />;
                    }} />
                    <Route exact path="/account/:userPseudo/delete" render={() => {
                        return <button onClick={() => this.deleteClick()}>Delete</button>
                    }} />
                </Switch>

                <section className="Fav-channels">
                    <h2>Favorites Channels</h2>

                </section>

            </div>
        );
    }





}


export default UserAccount;