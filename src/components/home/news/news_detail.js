import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import '../../../content/styles/newsLandingPage.css';
import Truncate from 'react-truncate';
import Parser from 'html-react-parser';

class NewsPageList extends Component {

    render() {  
        return (
            <div>
                {this.NewsList()}
            </div>
        );
    }

    NewsList()
    {

        const style = {
            'backgroundImage': `url(${this.props.cardImage})`,
          }

        if (this.props.itemCounter === 99) {
            return (
                <Row>
                    <div className='SContainer topNewsImageContainer' style={style}></div>
                    <Col xs={12} md={12} sm={6} className="topNewsTitle">
                        <Link className='topCardTitleText' to={process.env.REACT_APP_SITE_RELATIVE_URL + `/news/${this.props.slug}`}>
                            <div dangerouslySetInnerHTML={{
                            __html: this.props.title
                            }}/>
                        </Link>
                            <div className='topNewsExplaination'>
                                <Truncate lines={3}> {Parser(this.props.NewsExplaination)} </Truncate>
                             </div>
                    </Col>
                </Row>
            );
        }
    
        else
        {
            return (
                <Row>
                  <div className="SContainer newsBottomSection">
                    <Col xs={12} sm={6} md={3} className='newsImageSection'>
                        <div>
                            <div className='newscardImage' style={{
                                backgroundImage: `url(${this.props.cardImage})`
                            }}></div>
                        </div>
                    </Col>
                    <Col xs={12} md={8} className="bottomNewsExplain">
                        <div>
                            <Link className='bottomCardTitle' to={process.env.REACT_APP_SITE_RELATIVE_URL + `/news/${this.props.slug}`}>
                                <div className="bottomCardTitleText" dangerouslySetInnerHTML={{
                                __html: this.props.title
                                }}/>
                            </Link>
                                <div className='bottomNewsExplaination'>
                                        <Truncate lines={3}> {Parser(this.props.NewsExplaination)} </Truncate>
                                </div>
                        </div>
                    </Col>
                  </div>
                </Row>
            );
        }
    }


};

export default NewsPageList;
