import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EventList from './Events/event_list';
import CarouselData from './Carousel/index';
import SearchCards from './Search_Cards/index';
import ProgramCards from './Program_Cards/index';
import ProgramInitiatives from './Program_Initiatives/index';

class Home extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <div className="GBanner">
          <CarouselData />
        </div>
          <SearchCards />
          <ProgramCards />
        <div className="container">
          <EventList />
        </div>
        <ProgramInitiatives />
      </div>
    )
  }
}

export default Home;
