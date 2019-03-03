import React, { Component } from 'react';
import "./UserAccount.css";
import "../userDefault.svg";
import { getUserDetails } from "../api";


class UserAccount extends Component {

    constructor(props) {
        super(props);
        this.state = { userInfo: {}}
    }

    componentDidMount() {

        const { params } = this.props.match;
        getUserDetails(params.userPseudo)
            .then(response => {
                console.log("User", response.data); this.setState({ userInfo: response.data })
            })
        
    }

    render() {
        const { userInfo } = this.state;
        return (
            <div className="UserAccount">
                
                <section className="User-profile">
                    <ul>
                        <li className="User-visual">
                            <img src={userInfo.profileImg} alt="User Profile Photo" />
                            <h2>{userInfo.pseudo}</h2>
                        </li>
                        <li className="User-info">
                            <b>{userInfo.location}</b>
                            <p><i>{userInfo.age}</i></p>
                            <p>{userInfo.description}</p>
                        </li>
                    </ul>
                </section> {/*end section user-profile */}
                
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

                <section>
                    <h2>Friends</h2>
                    {/* insert favorites profiles component */}
                </section>


            </div>
        );
    }





}


export default UserAccount;