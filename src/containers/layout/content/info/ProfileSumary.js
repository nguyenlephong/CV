import React from 'react';
import './index.scss'; 
// import _ from 'lodash';
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react';
import ScoreBoard from 'images/project/scoreboard.JPG';
class ProfileSumary extends React.Component {
    state = { 
        open: false , 
        openDeCuong: false, 
        openYoutube: false,
        colorIcon: 'green',
        iconName: 'hand point right outline',
        colorIconCheck: 'green',
        iconNameCheck: 'check'
    }

    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
      this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
    }
  
    closeConfigShowDeCuong = (closeOnEscape, closeOnDimmerClick) => () => {
      this.setState({ closeOnEscape, closeOnDimmerClick, openDeCuong: true })
    }
  
    closeConfigShowYoutubeChannel = (closeOnEscape, closeOnDimmerClick) => () => {
      this.setState({ closeOnEscape, closeOnDimmerClick, openYoutube: true })
    }
  
    close = () => this.setState({ open: false })
    
    closeDeCuong = () => this.setState({ openDeCuong: false })
    
    closeYoutubeChannel = () => this.setState({ openYoutube: false })


    render() {
        const { open, openDeCuong ,
            closeOnEscape, closeOnDimmerClick , 
            openYoutube, colorIcon, iconName, 
            iconNameCheck, colorIconCheck} = this.state;
        return (
            <div className="cv-content-profile__sumary">
                <h2 className="pf-sumary__title">Profile sumary</h2>
                
                <div className="pf-sumary__block_description">
                    <span className="pf-sumary__description">
                    Tôi tên là Nguyễn Lê Phong, hiện tại tôi đang là sinh viên năm 4 trường đại học Nông Lâm TP HCM. 
                    Tôi đã tích lũy đủ tín chỉ và đang trong quá trình làm luận văn tốt nghiệp để hoàn thành chương trình học đại học. 
                    Tôi là một lập trình viên <strong>Full Stack</strong>, có kiến thức tốt về ngôn ngữ <strong>Java</strong> và <strong>Framework ReactJS</strong>. 
                    </span>
                </div>

                <div className="pf-sumary__block_description">
                    <span className="pf-sumary__title-description">
                        <Icon color={colorIcon} name={iconName} />  <strong>Về điểm mạnh:</strong>
                    </span>
                    <div className="pf-sumary__strong">
                        <Icon color={colorIconCheck} name={iconNameCheck} /> 
                        Tôi là người có trách nhiệm cao trong công việc.
                    </div>
                    <div className="pf-sumary__strong">
                        <Icon color={colorIconCheck} name={iconNameCheck} /> 
                        Là người dễ hòa đồng, sẵn sàng giúp đỡ người khác khi có thể.
                    </div>
                    <div className="pf-sumary__strong">
                        <Icon color={colorIconCheck} name={iconNameCheck} /> 
                        Tôi có khả năng quản lý thời gian cá nhân tốt.
                    </div>
                    <div className="pf-sumary__strong">
                        <Icon color={colorIconCheck} name={iconNameCheck} /> 
                        Dễ dàng thích nghi với môi trường làm việc nhóm.
                    </div>
                    <div className="pf-sumary__strong">
                        <Icon color={colorIconCheck} name={iconNameCheck} /> 
                        Có khả năng phân tích vấn đề, giải quyết vấn đề.
                    </div>
                    <div className="pf-sumary__strong">
                        <Icon color={colorIconCheck} name={iconNameCheck} /> 
                        Chịu đựng áp lực tốt, tính kiên nhẫn cao.
                    </div>
                </div>
                <div className="pf-sumary__block_description">
                    <span className="pf-sumary__title-description">
                        <Icon color={colorIcon} name={iconName} />  <strong>Về điểm yếu:</strong>
                    </span>
                    <div className="pf-sumary__strong">
                        <Icon color={colorIconCheck} name={iconNameCheck} /> 
                        Tôi chưa có nhiều kinh nghiệm trong lĩnh vực hiện tại.
                    </div>
                    <div className="pf-sumary__strong">
                        <Icon color={colorIconCheck} name={iconNameCheck} /> 
                        Trình độ ngoại ngữ (Tiếng Anh) chưa tốt.
                    </div>
                    <div className="pf-sumary__strong">
                        <Icon color={colorIconCheck} name={iconNameCheck} /> 
                        Mắt thẩm mỹ không cao
                    </div>
                </div>
                <div className="pf-sumary__block_description">
                    <span className="pf-sumary__title-description">
                        <Icon color={colorIcon} name={iconName} />  <strong>Về sở thích:</strong>
                    </span>
                    <div className="pf-sumary__strong">
                        <Icon color={colorIconCheck} name={iconNameCheck} /> 
                        Tôi là một người đam mê công nghệ, ứng dụng công nghệ vào thực tế.
                    </div>
                    <div className="pf-sumary__strong">
                        <Icon color={colorIconCheck} name={iconNameCheck} /> 
                        Thích xem phim (phim có thể mang lại các bài học nâng cao kỷ năng sống), ca hát vào cuối tuần, ngày nghỉ cùng với bạn bè, người thân.
                    </div>
                    <div className="pf-sumary__strong">
                        <Icon color={colorIconCheck} name={iconNameCheck} /> 
                        Thích đọc tin tức công nghệ mới, ứng dụng mới để chém gió với bạn bè khi rảnh rỗi.
                    </div>
                </div>

                <div className="pf-sumary__block_description">
                    <span className="pf-sumary__description">
                    </span>
                </div>

                <div className="pf-sumary__block_description">
                    <Button color='brown' onClick={this.closeConfigShow(true, false)}>Xem bảng điểm</Button>
                    <Button color='teal' onClick={this.closeConfigShowDeCuong(true, false)}>Xem đề cương luận văn</Button>
                    <Button color='orange' onClick={this.closeConfigShowYoutubeChannel(true, false)}>Xem kênh youtube của tôi</Button>
                    <Modal 
                        open={open}
                        closeOnEscape={closeOnEscape}
                        closeOnDimmerClick={closeOnDimmerClick}
                        onClose={this.close}
                        >
                        <Modal.Header>Bảng điểm</Modal.Header>
                        <Modal.Content image scrolling>
                            <Modal.Description>
                                <Header>Bảng điểm đại học</Header>
                                <p>Đây là bảng điểm lưu lại 3 năm học của tôi, kỳ cuối cùng vẫn chưa có điểm từ phía giảng viên nên đang đợi trong quá trình cập nhật.</p>
                                <div  style={{textAlign: 'center'}}>
                                    <Image size='big' src={ScoreBoard} wrapped />
                                </div>

                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button onClick={this.close} positive >Done</Button>
                        </Modal.Actions>
                    </Modal>
                    <Modal 
                        open={openDeCuong}
                        closeOnEscape={closeOnEscape}
                        closeOnDimmerClick={closeOnDimmerClick}
                        onClose={this.closeDeCuong}
                        size="large" style={{height: '94%'}} 
                        >
                        <Modal.Header>Đề cương luận văn</Modal.Header>
                        <Modal.Content image scrolling>

                            <Modal.Description>
                                <Header>SmartDrone</Header>
                                <p>Đây là chi tiết đề cương luận văn tốt nghiệp mà tôi phải thực hiện trong thời gian tới.</p>
                                <iframe 
                                    title="Smartdrone"
                                    width="100%"
                                    height="540px"
                                    src="https://drive.google.com/file/d/1YeFRa9tHYT6KfkNufwiLEN6z1Jcfx3WI/preview">
                                </iframe>

                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button onClick={this.closeDeCuong}  positive  >Done</Button>
                        </Modal.Actions>
                    </Modal>
                    
                    <Modal 
                        open={openYoutube}
                        closeOnEscape={closeOnEscape}
                        closeOnDimmerClick={closeOnDimmerClick}
                        onClose={this.closeYoutubeChannel}
                        size="large" style={{height: '94%'}} 
                        >
                        <Modal.Header>Kênh youtube của tôi</Modal.Header>
                        <Modal.Content image scrolling>

                            <Modal.Description>
                                <Header>Chia sẽ kiến thức</Header>
                                <p>Kênh youtube hơn 700 lượt đăng ký và hơn 200 000 view của tôi.</p>
                                <iframe 
                                    title="Youtube channel"
                                    width="100%"
                                    height="540px"
                                    src="https://www.youtube.com/channel/UCVT2aPzoLT4Qj64VpDBvxuw">
                                </iframe>
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button onClick={this.closeDeCuong}  positive  >Done</Button>
                        </Modal.Actions>
                    </Modal>
                </div>

            </div>
        );
    }
}


export default ProfileSumary;
