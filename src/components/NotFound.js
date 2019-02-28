import React, { Component } from 'react';

import './NotFound.css';


class NotFound extends Component {
    render() {
        return (
            <section>
                <h2>OOPS !></h2>
                <p>This page does not exist</p>
                <img src='https://media.giphy.com/media/FEikw3bXVHdMk/giphy.gif' alt="error"/>
            </section>
        );
    }
}



export default NotFound;