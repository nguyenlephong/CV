import React from 'react';
import './index.scss'; 
import _ from 'lodash';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import ScoreBoard from 'images/project/scoreboard.JPG';
class ProfileSumary extends React.Component {
    state = { open: false , openDeCuong: false, openYoutube: false}

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
        const { open, openDeCuong ,closeOnEscape, closeOnDimmerClick , openYoutube} = this.state
        return (
            <div className="cv-content-profile__sumary">
                <h2 className="pf-sumary__title">Profile sumary</h2>
                
                <div className="pf-sumary__block_description">
                    <span className="pf-sumary__description">
                    Tên của tôi là Nguyễn Lê Phong, tôi hiện đang là sinh viên năm 4 của khoa công nghệ thông tin, trường đại học Nông Lâm Thành Phố Hồ Chí Minh.<span> </span> 
                    </span>
                    <span className="pf-sumary__description">
                    Hiện tại tôi đã hoàn thành hết các môn học tín chỉ, kỳ này tôi đang trong giai đoạn làm luận văn tốt nghiệp.<span> </span>
                    </span>
                    <span className="pf-sumary__description">
                    Tôi là một lập trình viên Fullstack, có kiến thức tốt về ngôn ngữ <strong>Java</strong>, <strong>Framework ReactJS</strong>.
                    </span>
                </div>

                <div className="pf-sumary__block_description">
                    <span className="pf-sumary__description">
                    Tôi là người có trách nhiệm cao, thích giúp đỡ người khác, điều đó làm tôi trở nên dễ dàng thân thiện trong môi trường khác. <span> </span>
                    </span>
                    <span className="pf-sumary__description">
                    Tôi được bạn bè đánh giá cao trong quá trình làm việc nhóm ở trường học qua các đồ án môn học. <span> </span>Tôi rất tự tin trong phần giao tiếp, thuyết trình một vấn đề. <span> </span>
                    </span>
                </div>

                <div className="pf-sumary__block_description">
                    <span className="pf-sumary__description">
                    Công nghệ mới và ngôn ngữ mới là những chủ đề mà tôi đam mê, tìm hiểu và học hỏi. Ngay từ thời còn đi học tôi rất muốn áp dụng công nghệ mới để làm ra một vật thể có ích cho xã hội, và đó là đề tài làm luận văn tốt nghiệp của tôi.<span> </span>
                    </span>
                    <span className="pf-sumary__description">
                    Tôi cũng có kênh youtube để chia sẽ kiến thức của mình đến với mọi người.<span> </span>
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
