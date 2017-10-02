import React, {Component} from "react";
import PressRelease from './PressReleases/press_release_list'
import ReportStatsardList from './ReportsStats/Report_stats_card_list'
import LawsList from './Laws/Laws_list'
import EducationalMaterialsList from './EducationalMaterials/Education_materials_list'
import Banner from '../shared/banner'
import SubSectionDropdown from '../shared/Sub_section_dropdown'
import PressReleaseDetail from '../PressReleases/PressReleasedetail'

class ResourcesContainer extends Component {

  constructor(props) {
    super(props);

    this.fetchPressRelease = this.fetchPressRelease.bind(this);
  }

  fetchPressRelease(year) {
    console.log('yeshu');
    console.log(year);
  }

  render() {
    const BannerText = {
      title: 'Resources',
      content: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit enean commodo ligula eget dolorAenean massa. Cum sociis natoque penatibus.'
    }

    return (
      <div>
        <div>
          <Banner text={BannerText}/>
        </div>
        <div className='container'></div>
        <div className='container'>
          <SubSectionDropdown ondropDownChange={this.fetchPressRelease}/>
        </div>
        <div className='container'>
          <PressRelease/>
        </div>
        <div style={{
          backgroundColor: '#F2F2F2'
        }}>
          <div className='container'>
            <ReportStatsardList/>
          </div>
        </div>
        <div className='container'>
          <LawsList/>
        </div>
        <div >
          <EducationalMaterialsList/>
        </div>
      </div>
    );
  };
};

export default ResourcesContainer;
