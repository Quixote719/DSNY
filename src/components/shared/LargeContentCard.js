import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import styles from '../../content/styles/card.css';

class LargeContentCard extends Component {
  render() {
    const styles={
      narrow:{
        'width': '460px',
        'min-height': '200px',
        'padding': '15px 20px',
        'font-size': '21px',
        'background-color':'grey',
        'display':'inline-block'
      },
      wide:{
        'width': '617px',
        'min-height': '200px',
        'padding': '20px',
        'font-size': '21px',
        'background-color':'lightgreen',
        'display':'inline-block'
      }
    }
    return (
        <div style = {this.props.type=='2'?styles.wide:styles.narrow} className='ContentCard'>
            jiguo-home-vue, @aiteq/grunt-slack, winning-cli, @npm-public/searchkit, caddyhub, axios-http-adapter, chimp-wrapper, gitkit, mycro-secrets, tmb.js, mohito, structure-api-js, bitcoin-api-light, hypernova-client, waxios, reactjs-lightweight-boilerplate, rdclient, OK-GOOGLE, hs-data-seeder, publish-gateway-poc, scrape-narou, naroujs, zooid-ui-device-picker, kanban-request, lamassu-kraken, docbase-js, fantasybach-sdk, git-clone-org, dcbg, stryve-api-client, awaitfor, draftjs-editor, nowtv-sales-shared, QnA_Fore, @all4back/api-client, blitz-cli, shopify-promise-2, prefix-cc, generator-react-redux-skeleton, excute, adyen-client, springful-utils, mlb-game-day, cvpokeapi, request-latency, react-github-summary, crowdfunding, dory, flywheeljs, redux-make-request, and more
        </div>
    );
  };
};

// LargeContentCard.propTypes = {
// };

export default LargeContentCard;
