import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './index.scss';
import {Image} from 'semantic-ui-react'
import Avartar from 'images/profile/avartar.jpg';
import CoTuong from 'images/project/cotuong.png';
import PaypalShop from 'images/project/paypal.png';
import SmartphoneShop from 'images/project/shopping.jpg';
import IntlMessages from 'components/intl-message/intlMessages';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cv-content-project">
        <h2 className="pf-summary__title"><IntlMessages id={'topbar.menu_project.title'}/></h2>
        <VerticalTimeline
          // layout="one-column"
        >
          {/* <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        // icon={<Avatar size="small" icon="user" />}
                    >
                        <h3 className="vertical-timeline-element-title"><IntlMessages id={'topbar.project_start.title'} /></h3>
                        <h4 className="vertical-timeline-element-subtitle"> </h4>
                        <span className="vertical-timeline-element-date right"><IntlMessages id={'topbar.project_start.date'} /></span>
                    </VerticalTimelineElement> */}

          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            iconStyle={{background: 'rgb(33, 150, 243)', color: 'red',}}
            icon={<Image src={PaypalShop} size='medium' circular/>}
          >
            <h3 className="vertical-timeline-element-title"><IntlMessages id={'topbar.project_rentalcar.title'}/></h3>
            <h4 className="vertical-timeline-element-subtitle"><IntlMessages id={'topbar.project_rentalcar.subtitle'}/>
            </h4>
            <p className="project__text-description"><IntlMessages id={'topbar.project_rentalcar.description'}/></p>
            <p className="project__text-description">
              <IntlMessages id={'topbar.project.linkdemo'}/>:
              <a href="https://rental-car.azurewebsites.net/"> <IntlMessages
                id={'topbar.project.linkdemo.description'}/></a>
            </p>
            <p className="project__text-description">
              <IntlMessages id={'topbar.project.linkcode'}/>:
              <a href="https://github.com/lephong2017/ThuongMaiDienTu-Backend"> <IntlMessages
                id={'topbar.project.linkdemo.description'}/></a>
            </p>
            <span className="vertical-timeline-element-date left"><IntlMessages
              id={'topbar.project_rentalcar.date'}/></span>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            iconStyle={{background: 'rgb(33, 150, 243)', color: 'red',}}
            icon={<Image src={Avartar} size='medium' circular/>}
          >
            <h3 className="vertical-timeline-element-title"><IntlMessages id={'topbar.project_rollcall.title'}/></h3>
            <h4 className="vertical-timeline-element-subtitle"><IntlMessages id={'topbar.project_rollcall.subtitle'}/>
            </h4>
            <p className="project__text-description"><IntlMessages id={'topbar.project_rollcall.description'}/></p>
            <iframe
              title="Ứng dụng điểm danh sinh viên bằng nhận diện khuôn mặt"
              width="260"
              height="140"
              src="https://www.youtube.com/embed/ZuUbsIkwUIg"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
            <span className="vertical-timeline-element-date right"><IntlMessages
              id={'topbar.project_rollcall.date'}/></span>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            iconStyle={{background: 'rgb(33, 150, 243)', color: 'red',}}
            icon={<Image src={CoTuong} size='medium' circular/>}
          >
            <h3 className="vertical-timeline-element-title"><IntlMessages id={'topbar.project_chess.title'}/></h3>
            <h4 className="vertical-timeline-element-subtitle"><IntlMessages id={'topbar.project_chess.subtitle'}/></h4>
            <p className="project__text-description"><IntlMessages id={'topbar.project_chess.description'}/></p>
            <p className="project__text-description">
              <IntlMessages id={'topbar.project.linkcode'}/>:
              <a href="https://github.com/lephong2017/AI-CoTuong"> <IntlMessages
                id={'topbar.project.linkdemo.description'}/></a>
            </p>
            <span className="vertical-timeline-element-date left"><IntlMessages
              id={'topbar.project_chess.date'}/></span>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            iconStyle={{background: 'rgb(33, 150, 243)', color: 'red',}}
            icon={<Image src={SmartphoneShop} size='medium' circular/>}
          >
            <h3 className="vertical-timeline-element-title"><IntlMessages id={'topbar.project_shoppingweb.title'}/></h3>
            <h4 className="vertical-timeline-element-subtitle"><IntlMessages
              id={'topbar.project_shoppingweb.subtitle'}/></h4>
            <p className="project__text-description"><IntlMessages id={'topbar.project_shoppingweb.description'}/></p>
            <iframe
              title="Báo cáo project website cuối kỳ môn học Lập Trình Web"
              width="260"
              height="140"
              src="https://www.youtube.com/embed/uPdjFb_IDzg"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
            <span className="vertical-timeline-element-date right"><IntlMessages
              id={'topbar.project_shoppingweb.date'}/></span>

          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
            // icon={<Image src={Boom} size='medium' circular />}
          >
            <h3 className="vertical-timeline-element-title"><IntlMessages id={'topbar.project_boom.title'}/></h3>
            <h4 className="vertical-timeline-element-subtitle"><IntlMessages id={'topbar.project_boom.subtitle'}/></h4>
            <p className="project__text-description"><IntlMessages id={'topbar.project_boom.description'}/></p>
            <p className="project__text-description">
              <IntlMessages id={'topbar.project.linkcode'}/>:
              <a href="https://github.com/lephong2017/OOD-GameBoom"> <IntlMessages
                id={'topbar.project.linkdemo.description'}/></a>
            </p>
            <span className="vertical-timeline-element-date left"><IntlMessages id={'topbar.project_boom.date'}/></span>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}
            // icon={<Avatar size="small" icon="user" />}
          >
            <h3 className="vertical-timeline-element-title"><IntlMessages id={'topbar.project_start.title'}/></h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <span className="vertical-timeline-element-date right"><IntlMessages
              id={'topbar.project_start.date'}/></span>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
}


export default Education;
