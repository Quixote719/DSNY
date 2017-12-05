import React, { Component } from 'react';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';

class FooterApp extends Component {

  RedirectTo(link){
    window.location.href = link;
  }
  getApp(){

      return (({data})=>(
                <div>
                  {data.map((item, i)=>(

                    <div key={i} className="FooterRow">
                      <span>
                          {item.name}
                      </span>
                      <i className="fa fa-android" onClick={()=>this.RedirectTo(item.GooglePlay)}></i>
                      <i className="fa fa-apple" onClick={()=>this.RedirectTo(item.AppStore)}></i>
                      <hr className="SpLine"/>
                    </div>
                  ))}
                </div>
              )
      );

  }

  render(){
    const Service = this.getApp();
    return(
      <div>
        <div className="FooterSubt">
          Download Apps
          <hr className="SpLine"/>
        </div>
        <Service data={this.props.rows}/>
      </div>
    )
  }
}

export default FooterApp;
