import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterArchive extends Component {


  getArchive(){
      return (({data})=>(
                <div>
                  {data.map((item, i)=>(
                    <div key={i} className="FooterBoldRow">
                      <Link to={item.link}>
                          {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              )
      );

  }

  render(){
    const Service = this.getArchive();
    return(
      <div>
        <div className="FooterSubt">
          Archives
        </div>
        <Service data={this.props.rows}/>
      </div>
    )
  }
}

export default FooterArchive;
