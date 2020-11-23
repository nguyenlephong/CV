import React from 'react';
import './index.scss';
// import _ from 'lodash';
import {Icon} from 'semantic-ui-react';
// import ScoreBoard from 'images/project/scoreboard.JPG';
import IntlMessages from 'components/intl-message/intlMessages';
// import ImageGallery from 'containers/layout/content/info/image-gallery/ImageSlider';
import ImageGalleryComponent from 'components/list-of-photos';
import VideoGalleryComponent from 'components/list-of-videos';

class ProfileSumary extends React.Component {
  state = {
    open: false,
    openDeCuong: false,
    colorIcon: 'green',
    iconName: 'hand point right outline',
    colorIconCheck: 'green',
    iconNameCheck: 'check'
  }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({closeOnEscape, closeOnDimmerClick, open: true})
  }

  closeConfigShowDeCuong = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({closeOnEscape, closeOnDimmerClick, openDeCuong: true})
  }

  close = () => this.setState({open: false})

  closeDeCuong = () => this.setState({openDeCuong: false})

  render() {
    const {
      // open, openDeCuong ,
      // closeOnEscape, closeOnDimmerClick ,
      colorIcon, iconName,
      iconNameCheck, colorIconCheck
    } = this.state;

    return (
      <div className="cv-content-profile__sumary">

        <h2 className="pf-summary__title"><IntlMessages id={'topbar.profile.title'}/></h2>

        <div className="pf-summary__block_description">
                    <span className="pf-summary__description">
                        <IntlMessages id={'topbar.profile.description.summary'}/>
                    </span>
        </div>

        <div className="pf-summary__block_description">
                    <span className="pf-summary__title-description">
                        <Icon color={colorIcon} name={iconName}/><strong><IntlMessages
                      id={'topbar.profile.description.strengths'}/>:</strong>
                    </span>
          <div className="pf-summary__strong">
            <Icon color={colorIconCheck} name={iconNameCheck}/>
            <IntlMessages id={'topbar.profile.description.strengths.description1'}/>.
          </div>
          <div className="pf-summary__strong">
            <Icon color={colorIconCheck} name={iconNameCheck}/>
            <IntlMessages id={'topbar.profile.description.strengths.description2'}/>.
          </div>
          <div className="pf-summary__strong">
            <Icon color={colorIconCheck} name={iconNameCheck}/>
            <IntlMessages id={'topbar.profile.description.strengths.description3'}/>.
          </div>
          <div className="pf-summary__strong">
            <Icon color={colorIconCheck} name={iconNameCheck}/>
            <IntlMessages id={'topbar.profile.description.strengths.description4'}/>.
          </div>
          <div className="pf-summary__strong">
            <Icon color={colorIconCheck} name={iconNameCheck}/>
            <IntlMessages id={'topbar.profile.description.strengths.description5'}/>.
          </div>
          <div className="pf-summary__strong">
            <Icon color={colorIconCheck} name={iconNameCheck}/>
            <IntlMessages id={'topbar.profile.description.strengths.description6'}/>.
          </div>
          <div className="pf-summary__strong">
            <Icon color={colorIconCheck} name={iconNameCheck}/>
            <IntlMessages id={'topbar.profile.description.strengths.description7'}/>.
          </div>
          <div className="pf-summary__strong">
            <Icon color={colorIconCheck} name={iconNameCheck}/>
            <IntlMessages id={'topbar.profile.description.strengths.description8'}/>.
          </div>
          <div className="pf-summary__strong">
            <Icon color={colorIconCheck} name={iconNameCheck}/>
            <IntlMessages id={'topbar.profile.description.strengths.description9'}/>.
          </div>
          <div className="pf-summary__strong">
            <Icon color={colorIconCheck} name={iconNameCheck}/>
            <IntlMessages id={'topbar.profile.description.strengths.description10'}/>.
          </div>
        </div>
        <div className="pf-summary__block_description">
                    <span className="pf-summary__title-description">
                        <Icon color={colorIcon} name={iconName}/>  <strong><IntlMessages
                      id={'topbar.profile.description.weaknesses'}/>:</strong>
                    </span>
          <div className="pf-summary__strong">
            <Icon color={colorIconCheck} name={iconNameCheck}/>
            <IntlMessages id={'topbar.profile.description.weaknesses.description1'}/>.
          </div>
          <div className="pf-summary__strong">
            <Icon color={colorIconCheck} name={iconNameCheck}/>
            <IntlMessages id={'topbar.profile.description.weaknesses.description2'}/>.
          </div>
          {/* <div className="pf-summary__strong">
                        <Icon color={colorIconCheck} name={iconNameCheck} /> 
                        <IntlMessages id={'topbar.profile.description.weaknesses.description3'} />.
                    </div> */}
        </div>
        <div className="pf-summary__block_description">
                    <span className="pf-summary__title-description">
                        <Icon color={colorIcon} name={iconName}/>  <strong><IntlMessages
                      id={'topbar.profile.description.hobby'}/>:</strong>
                    </span>
          <div className="pf-summary__strong">
            <Icon color={colorIconCheck} name={iconNameCheck}/>
            <IntlMessages id={'topbar.profile.description.hobby.description1'}/>.
          </div>
          <div className="pf-summary__strong">
            <Icon color={colorIconCheck} name={iconNameCheck}/>
            <IntlMessages id={'topbar.profile.description.hobby.description2'}/>.
          </div>
          <div className="pf-summary__strong">
            <Icon color={colorIconCheck} name={iconNameCheck}/>
            <IntlMessages id={'topbar.profile.description.hobby.description3'}/>.
          </div>
        </div>

        <div className="pf-summary__block_description">
                    <span className="pf-summary__title-description">
                        <Icon color={colorIcon} name={iconName}/>  <strong><IntlMessages
                      id={'topbar.profile.description.some_photo'}/>:</strong>
                    </span>

          <ImageGalleryComponent/>
        </div>
        <div className="pf-summary__block_description">
                    <span className="pf-summary__title-description">
                        <Icon color={colorIcon} name={iconName}/>  <strong><IntlMessages
                      id={'topbar.profile.description.some_video'}/>:</strong>
                    </span>

          <VideoGalleryComponent/>
        </div>
        {/* <div className="pf-summary__block_description">
                    <ImageGallery />
                </div> */}

        {/* <div className="pf-summary__block_description">
                    <div className="btn-group__profile">
                        <Button color='brown' onClick={this.closeConfigShow(true, false)}>Xem bảng điểm</Button>
                        <Button color='teal' onClick={this.closeConfigShowDeCuong(true, false)}>Xem đề cương luận văn</Button>
                        <Button color='orange'><a style={{color:'white'}} href="http://bit.ly/2D0vpfn">Xem kênh youtube của tôi</a></Button>
                    </div>
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
                    
                </div> */}

      </div>
    );
  }
}


export default ProfileSumary;
