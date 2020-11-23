import React from 'react';
import {Button, Grid, Icon, Image} from 'semantic-ui-react';
import './sidebar-main.scss';
import ImgAvartar from 'images/profile/avartar.jpg';
import Personal from './info/personal';
import Contact from './info/contact';
import Config from 'settings/index';
import IntlMessages from 'components/intl-message/intlMessages';
import $ from 'jquery';
import {showNotification} from 'components/ptp__notification/Notification'
import {injectIntl} from 'react-intl';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeNumber: 0,
      clientIP: 'NONE'
    };
  }

  componentDidMount() {
    this.getIpUserClient()
  }

  getIpUserClient = () => {
    let that = this;
    $.get("https://api.ipdata.co?api-key=test", function (response) {
      that.setState({clientIP: response.ip});
      $("#ip_user_client").html(response.ip);
      $("#city_user_client").html(response.city);
    }, "jsonp");
    this.updateLikeNumber()
  }

  updateLikeNumber = () => {
    let that = this;
    $.get("https://5bbc78c229214000136cbff6.mockapi.io/api/cv", function (response) {
      that.setState({likeNumber: response[0].likeNumber})
    });
  }

  handleLikeMe = async () => {
    let ip = await localStorage.getItem("ip_client");
    if (ip !== "NONE" && ip !== this.state.clientIP) {
      let data = {
        id: "1",
        likeNumber: this.state.likeNumber + 1
      }
      let that = this;
      $.ajax({
        url: "https://5bbc78c229214000136cbff6.mockapi.io/api/cv/1",
        type: 'PUT',
        contentType:
          "application/json;charset=utf-8",
        data: JSON.stringify(data),
        success: function () {
          that.updateLikeNumber();
          localStorage.setItem("ip_client", that.state.clientIP);
          that.openNotificationLikeSuccess()
        },
        error: function () {
        }
      });
    } else {
      this.openNotificationLikeError()
    }

  }

  openNotificationLikeError = () => {
    const {intl} = this.props
    showNotification(intl.formatMessage({id: 'sidebar.info_text.err_for_like_title'}),
      intl.formatMessage({id: 'sidebar.info_text.err_for_like_description'}), "topRight", "error");
  };

  openNotificationLikeSuccess = () => {
    const {intl} = this.props
    showNotification(intl.formatMessage({id: 'sidebar.info_text.thank_for_like_title'}),
      intl.formatMessage({id: 'sidebar.info_text.thank_for_like_description'}), "topRight", "success");
  };

  render() {
    return (
      <div className="cv-main-sidebar">
        <Grid padded columns={1} relaxed>
          <Grid.Row>
            <Grid.Column
              mobile={16} tablet={16} computer={16}>
              <div className="cv-header-sidebar-wrapper">
                <Image
                  centered
                  avatar
                  bordered
                  // fluid
                  rounded
                  src={ImgAvartar} size='small' circular/>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid padded columns={1} relaxed>
          <Personal/>
          <Contact/>
        </Grid>
        <Button id="myBtnLike" onClick={this.handleLikeMe} circular color='red' icon='like'/>
        <div className="info-version">
          <div>
            <span className="title-info-text"><IntlMessages id={'sidebar.info_text.version'}/> {Config.version}</span>
          </div>
          <div>
            <span className="title-info-text"><IntlMessages
              id={'sidebar.info_text.person_access'}/> {this.state.likeNumber} </span>
            <span><Icon name='like' color={"red"}/></span>
          </div>
          <div>
            <span className="title-info-text"><IntlMessages id={'sidebar.info_text.ip_client'}/><span
              id="ip_user_client"></span></span>
          </div>
          <div>
            <span className="title-info-text"><IntlMessages id={'sidebar.info_text.city_user_client'}/><span
              id="city_user_client"></span></span>
          </div>
        </div>
      </div>
    );
  }
}


export default injectIntl(Sidebar);
