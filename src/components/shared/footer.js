import React, { Component } from 'react';
import { Router, Route, browserHistory, Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import styles from '../../content/styles/footer.css';


// Test
var Footer = React.createClass({

    render: function () {

        return (
            // style={window.location.href == "http://localhost:3000/#/SearchDirectory"? {display: 'none'}:{display: 'block'}}
            <div> This is FOOTER
            </div>
        );
    }
});


export default Footer;
