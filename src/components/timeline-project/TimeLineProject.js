
import React from 'react';
import './TimeLineProject.style.scss';
import { Timeline, Icon,  } from 'antd';
import IntlMessages from 'components/intl-message/intlMessages';
import ChessGames from 'images/project/chess_games.jpg';
import WAT_OVERVIEW from 'images/project/wat_overview.png';
export default class TimelineComponent extends React.Component{

    render(){
        return (
            <div className="time-line_project">
                <Timeline mode="alternate">
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '32px' }} />} color="green">
                        <div className="content-body-timeline-item">
                            <span className="vertical-timeline-element-date left"><IntlMessages id={'topbar.project_banktool.date'} /></span>
                            <h3 className="vertical-timeline-element-title"><IntlMessages id={'topbar.project_banktool.title'} /></h3>
                            <h4 className="vertical-timeline-element-subtitle"><IntlMessages id={'topbar.project_banktool.subtitle'} /></h4>
                            <p className="project__text-description"><IntlMessages id={'topbar.project_banktool.description'} /></p>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '32px' }} />} color="green">
                        <div className="content-body-timeline-item">
                            <span className="vertical-timeline-element-date left"><IntlMessages id={'topbar.project_wat.date'} /></span>
                            <h3 className="vertical-timeline-element-title"><IntlMessages id={'topbar.project_wat.title'} /></h3>
                            <h4 className="vertical-timeline-element-subtitle"><IntlMessages id={'topbar.project_wat.subtitle'} /></h4>
                            <p className="project__text-description"><IntlMessages id={'topbar.project_wat.description'} /></p>
                            <div
                                style={{
                                    backgroundImage: `url(${WAT_OVERVIEW})`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'contain',
                                    width: 480,
                                    height: 270,
                                }}
                            >
                            </div>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '32px' }} />} color="green">
                        <div className="content-body-timeline-item">
                            <span className="vertical-timeline-element-date left"><IntlMessages id={'topbar.project_savyu.date'} /></span>
                            <h3 className="vertical-timeline-element-title"><IntlMessages id={'topbar.project_savyu.title'} /></h3>
                            <h4 className="vertical-timeline-element-subtitle"><IntlMessages id={'topbar.project_savyu.subtitle'} /></h4>
                            <p className="project__text-description"><IntlMessages id={'topbar.project_savyu.description'} /></p>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '32px' }} />} color="green">
                        <div className="content-body-timeline-item">
                            <span className="vertical-timeline-element-date left"><IntlMessages id={'topbar.project_froodini.date'} /></span>
                            <h3 className="vertical-timeline-element-title"><IntlMessages id={'topbar.project_froodini.title'} /></h3>
                            <h4 className="vertical-timeline-element-subtitle"><IntlMessages id={'topbar.project_froodini.subtitle'} /></h4>
                            <p className="project__text-description"><IntlMessages id={'topbar.project_froodini.description'} /></p>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '32px' }} />} color="green">
                        <div className="content-body-timeline-item">
                            <span className="vertical-timeline-element-date left"><IntlMessages id={'topbar.project_essay.date'} /></span>
                            <h3 className="vertical-timeline-element-title"><IntlMessages id={'topbar.project_essay.title'} /></h3>
                            <h4 className="vertical-timeline-element-subtitle"><IntlMessages id={'topbar.project_essay.subtitle'} /></h4>
                            <p className="project__text-description"><IntlMessages id={'topbar.project_essay.description'} /></p>
                            <iframe
                                title="Thiết bị bay thông minh"
                                width="480"
                                height="270"
                                src="https://www.youtube.com/embed/WCy_2q4zrWY"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '32px' }} />} color="green">
                        <div className="content-body-timeline-item">
                            <span className="vertical-timeline-element-date right"><IntlMessages id={'topbar.project_splus.date'} /></span>
                            <h3 className="vertical-timeline-element-title"><IntlMessages id={'topbar.project_splus.title'} /></h3>
                            <h4 className="vertical-timeline-element-subtitle"> </h4>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '32px' }} />} color="green">
                        <div className="content-body-timeline-item">
                            <span className="vertical-timeline-element-date left"><IntlMessages id={'topbar.project_rentalcar.date'} /></span>
                            <h3 className="vertical-timeline-element-title"><IntlMessages id={'topbar.project_rentalcar.title'} /></h3>
                            <h4 className="vertical-timeline-element-subtitle"><IntlMessages id={'topbar.project_rentalcar.subtitle'} /></h4>
                            <p className="project__text-description"><IntlMessages id={'topbar.project_rentalcar.description'} /></p>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '32px' }} />} color="green">
                        <div className="content-body-timeline-item">
                            <span className="vertical-timeline-element-date right"><IntlMessages id={'topbar.project_rollcall.date'} /></span>
                            <h3 className="vertical-timeline-element-title"><IntlMessages id={'topbar.project_rollcall.title'} /></h3>
                            <h4 className="vertical-timeline-element-subtitle"><IntlMessages id={'topbar.project_rollcall.subtitle'} /></h4>
                            <p className="project__text-description"><IntlMessages id={'topbar.project_rollcall.description'} /> </p>
                            <iframe
                                title="Ứng dụng điểm danh sinh viên bằng nhận diện khuôn mặt"
                                width="480"
                                height="270"
                                src="https://www.youtube.com/embed/ZuUbsIkwUIg"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '32px' }} />} color="green">
                        <div className="content-body-timeline-item">
                            <span className="vertical-timeline-element-date right"><IntlMessages id={'topbar.project_propsplus.date'} /></span>
                            <h3 className="vertical-timeline-element-title"><IntlMessages id={'topbar.project_propsplus.title'} /></h3>
                            <h4 className="vertical-timeline-element-subtitle"> </h4>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '32px' }} />} color="green">
                        <div className="content-body-timeline-item">
                            <span className="vertical-timeline-element-date left"><IntlMessages id={'topbar.project_chess.date'} /></span>
                            <h3 className="vertical-timeline-element-title"><IntlMessages id={'topbar.project_chess.title'} /></h3>
                            <h4 className="vertical-timeline-element-subtitle"><IntlMessages id={'topbar.project_chess.subtitle'} /></h4>
                            <p className="project__text-description"><IntlMessages id={'topbar.project_chess.description'} /></p>
                            <div
                                style={{
                                    backgroundImage: `url(${ChessGames})`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'contain',
                                    width: 480,
                                    height: 270
                                }}
                            >

                            </div>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '32px' }} />} color="green">
                        <div className="content-body-timeline-item">
                            <span className="vertical-timeline-element-date right"><IntlMessages id={'topbar.project_shoppingweb.date'} /></span>
                            <h3 className="vertical-timeline-element-title"><IntlMessages id={'topbar.project_shoppingweb.title'} /></h3>
                            <h4 className="vertical-timeline-element-subtitle"><IntlMessages id={'topbar.project_shoppingweb.subtitle'} /></h4>
                            <p className="project__text-description"><IntlMessages id={'topbar.project_shoppingweb.description'} /></p>
                            <iframe
                                title="Báo cáo project website cuối kỳ môn học Lập Trình Web"
                                width="480"
                                height="270"
                                src="https://www.youtube.com/embed/uPdjFb_IDzg"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '32px' }} />} color="green">
                        <div className="content-body-timeline-item">
                            <span className="vertical-timeline-element-date left"><IntlMessages id={'topbar.project_boom.date'} /></span>
                            <h3 className="vertical-timeline-element-title"><IntlMessages id={'topbar.project_boom.title'} /></h3>
                            <h4 className="vertical-timeline-element-subtitle"><IntlMessages id={'topbar.project_boom.subtitle'} /></h4>
                            <p className="project__text-description"><IntlMessages id={'topbar.project_boom.description'} /></p>
                            {/* <p className="project__text-description">
                                <IntlMessages id={'topbar.project.linkcode'} />:
                                <a href="https://github.com/lephong2017/OOD-GameBoom"> <IntlMessages id={'topbar.project.linkdemo.description'} /></a>
                            </p> */}
                        </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '32px' }} />} color="green">
                        <div className="content-body-timeline-item">
                            <span className="vertical-timeline-element-date right"><IntlMessages id={'topbar.project_start.date'} /></span>
                            <h3 className="vertical-timeline-element-title"><IntlMessages id={'topbar.project_start.title'} /></h3>
                            <h4 className="vertical-timeline-element-subtitle"> </h4>
                        </div>
                    </Timeline.Item>
                </Timeline>
            </div>
        )
    }
}
          