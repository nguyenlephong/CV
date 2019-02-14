import React from 'react';
import './index.scss'; 
import _ from 'lodash';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import ScoreBoard from 'images/project/scoreboard.JPG';
class ProfileSumary extends React.Component {

    render() {
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
                    <Modal trigger={<Button  color='brown'>Xem bảng điểm</Button>}>
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
                        <Button primary>
                            Proceed <Icon name='chevron right' />
                        </Button>
                        </Modal.Actions>
                    </Modal>
                    <Modal size="large" style={{height: '94%'}} trigger={<Button  color='teal'>Xem đề cương luận văn tốt nghiệp</Button>}>
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
                        <Button primary>
                            Done <Icon name='chevron right' />
                        </Button>
                        </Modal.Actions>
                    </Modal>
                </div>

            </div>
        );
    }
}


export default ProfileSumary;
