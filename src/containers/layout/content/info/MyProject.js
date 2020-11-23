import React from 'react';
import './index.scss';
import IntlMessages from 'components/intl-message/intlMessages';
import TimelineComponent from 'components/timeline-project/TimeLineProject';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cv-content-project">
        <h2 className="pf-summary__title"><IntlMessages id={'topbar.menu_project.title'}/></h2>
        <TimelineComponent/>
      </div>
    );
  }
}


export default Education;
