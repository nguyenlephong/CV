import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Avatar } from 'antd';
import WorkIcons from 'images/profile/avartar.jpg';
import './index.scss';
import { Image } from 'semantic-ui-react'
class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="cv-content-profile__sumary">
                <h2 className="pf-sumary__title">My Project</h2>
                <span className="pf-sumary__description">
                <VerticalTimeline
                    // layout="one-column"
                >
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: 'red', }}
                        icon={<Image src={WorkIcons} size='medium' circular />}
                        // position="left"
                        iconOnClick={()=>console.log('onclick in 2011')}
                    >
                        <h3 className="vertical-timeline-element-title">Smartphone shopping websites</h3>
                        <h4 className="vertical-timeline-element-subtitle">Lập Trình Web</h4>
                        <p>
                        Project này là đồ án cuối kỳ của môn học <strong>Lập Trình Web</strong> gồm 4 thành viên và tôi là trưởng nhóm. Thật tuyệt vời khi nhóm chúng tôi trọn vẹn điểm 10. Đây link video ghi lại khoảng khắc tôi báo cáo.
                        </p>
                        <span class="vertical-timeline-element-date left">2016 - Project and Present</span>
                        <iframe 
                            title="Báo cáo project website cuối kỳ môn học Lập Trình Web"
                            width="260" 
                            height="140" 
                            src="https://www.youtube.com/embed/uPdjFb_IDzg" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<Avatar size="small" icon="user" />}
                    >
                        <h3 className="vertical-timeline-element-title">Games đặt boom</h3>
                        <h4 className="vertical-timeline-element-subtitle">Thiết Kế Hướng Đối Tượng</h4>
                        <p>
                            Đây là một trò chời được lập trình bằng ngôn ngữ java, đồ án này được hoàn thành bởi team chúng tôi gồm 4 người, và tôi là nhóm trường. Trò chơi được lập trình theo hướng đối tượng. Bên dưới là link soucecode.
                        </p>
                        <span class="vertical-timeline-element-date right">2016 - Project and Present</span>
                        <a href="https://github.com/lephong2017/OOD-GameBoom">Link code</a>
                        
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<Avatar size="small" icon="user" />}
                    />
                    </VerticalTimeline>
                </span>
            </div>
        );
    }
}


export default Education;
