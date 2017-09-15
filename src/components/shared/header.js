import React, { Component } from 'react';
import styles from '../../content/styles/header.css';


// Test
var Header = React.createClass({

    render: function () {

        return (
            // style={window.location.href == "http://localhost:3000/#/SearchDirectory"? {display: 'none'}:{display: 'block'}}
            <div> This is HEADER
            </div>
        );
    }
});


export default Header;
