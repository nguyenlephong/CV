import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './index.scss';
import { Image } from 'semantic-ui-react'
import Avartar from 'images/profile/avartar.jpg';
import Boom from 'images/project/boom.jpg';
import AI from 'images/project/AI.jpg';
import CoTuong from 'images/project/cotuong.png';
import PaypalShop from 'images/project/paypal.png';
import SmartphoneShop from 'images/project/shopping.jpg';
class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="cv-content-profile__sumary">
                <h2 className="pf-sumary__title">My Project</h2>
                <VerticalTimeline
                    // layout="one-column"
                >
                <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: 'red', }}
                        icon={<Image src={PaypalShop} size='medium' circular />}
                    >
                        <h3 className="vertical-timeline-element-title">Ứng dụng web cho thuê xe</h3>
                        <h4 className="vertical-timeline-element-subtitle">Thương Mại Điện Tử</h4>
                        <p>
                        Đồ án môn học này với mục đích là viết một ứng dụng có sử dụng các dịch vụ thanh toán online, đồng thời xây dựng một mô hình kinh doanh nhầm mang lại lợi nhuận. Đây là đồ án phục vụ cho môn học <strong>Thương mại điện tử</strong>. Dưới đây là link demo và sourcecode
                        </p>
                        <p>Link demo: <a  href="https://rental-car.azurewebsites.net/"> Click vô đây nè!</a></p>
                        <p>Link code: <a href="https://github.com/lephong2017/ThuongMaiDienTu-Backend">Click vô đây nè!</a></p>
                        <span class="vertical-timeline-element-date left">21/01/2019 - Project and Present</span>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: 'red', }}
                        icon={<Image src={Avartar} size='medium' circular />}
                    >
                        <h3 className="vertical-timeline-element-title">Ứng dụng điểm danh sinh viên bằng nhận diện khuôn mặt</h3>
                        <h4 className="vertical-timeline-element-subtitle">Lập Trình Ứng Dụng Trên Thiết Bị Di Động</h4>
                        <p>
                        Ứng dụng này được viết bằng ngôn ngữ ReactNative chạy thử nghiệm trên android để phục vụ cho đồ án môn học <strong>Lập trình trên thiết bị di động</strong>. Nó là một trong những đồ án mà tôi rất thích. Đây là video mà tôi đã quay lại những chức năng của ứng dụng.
                        </p>
                        <iframe 
                            title="Ứng dụng điểm danh sinh viên bằng nhận diện khuôn mặt"
                            width="260" 
                            height="140" 
                            src="https://www.youtube.com/embed/ZuUbsIkwUIg" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                        <span class="vertical-timeline-element-date right">11/01/2019 - Project and Present</span>
                    </VerticalTimelineElement>
                    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: 'red', }}
                        icon={<Image src={CoTuong} size='medium' circular />}
                    >
                        <h3 className="vertical-timeline-element-title">Games cờ tướng</h3>
                        <h4 className="vertical-timeline-element-subtitle">Nhập Môn Trí Tuệ Nhân Tạo</h4>
                        <p>
                        Project này là đồ án cuối kỳ của môn học <strong>Nhập môn trí tuệ nhân tạo</strong>. Mục đích của đồ án này là áp dụng được những thuật toán, giải thuật tìm kiếm từ cơ bản đến năng cao vào games, games có thể đánh với máy và máy chơi bằng nhiều thuật toán khác nhau. Bên dưới là link sourcecode.
                        </p>
                        <p>Link code: <a  href="https://github.com/lephong2017/AI-CoTuong">Click vô đây nè!</a></p>
                        <span class="vertical-timeline-element-date left">06/2018 - Project and Present</span>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: 'red', }}
                        icon={<Image src={SmartphoneShop} size='medium' circular />}
                    >
                        <h3 className="vertical-timeline-element-title">Smartphone shopping websites</h3>
                        <h4 className="vertical-timeline-element-subtitle">Lập Trình Web</h4>
                        <p>
                        Project này là đồ án cuối kỳ của môn học <strong>Lập Trình Web</strong> gồm 4 thành viên và tôi là trưởng nhóm. Thật tuyệt vời khi nhóm chúng tôi trọn vẹn điểm 10. Đây link video ghi lại khoảng khắc tôi báo cáo.
                        </p>
                        <iframe 
                            title="Báo cáo project website cuối kỳ môn học Lập Trình Web"
                            width="260" 
                            height="140" 
                            src="https://www.youtube.com/embed/uPdjFb_IDzg" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                        <span class="vertical-timeline-element-date right">2016 - Project and Present</span>

                    </VerticalTimelineElement>
                    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        // icon={<Image src={Boom} size='medium' circular />}
                    >
                        <h3 className="vertical-timeline-element-title">Games đặt boom</h3>
                        <h4 className="vertical-timeline-element-subtitle">Thiết Kế Hướng Đối Tượng</h4>
                        <p>
                            Đây là một trò chời được lập trình bằng ngôn ngữ java, đồ án này được hoàn thành bởi team chúng tôi gồm 4 người, và tôi là nhóm trường. Trò chơi được lập trình theo hướng đối tượng. Bên dưới là link soucecode.
                        </p>
                        <p>Link code: <a href="https://github.com/lephong2017/OOD-GameBoom">Click vô đây nè!</a></p>
                        <span class="vertical-timeline-element-date left">2016 - Project and Present</span>
                        
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        // icon={<Avatar size="small" icon="user" />}
                    >
                        <h3 className="vertical-timeline-element-title">Bắt đầu học đại học tại trường Đại Học Nông Lâm</h3>
                        <h4 className="vertical-timeline-element-subtitle"></h4>
                        <span class="vertical-timeline-element-date right">2015</span>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        );
    }
}


export default Education;
