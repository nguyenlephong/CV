import React from 'react';
import './ListOfVideos.style.scss';
import IntlMessages from 'components/intl-message/intlMessages';

class ListOfvideosComponent extends React.Component {

  render() {

    return (
      <div className="list-of-video_wrapper">
        <div id="score_board-video" className="item_videos">
          <iframe width="560" height="315"
                  title={<IntlMessages id={'topbar.profile.pf-summary.some_video_title1'}/>}
                  src="https://www.youtube.com/embed/WCy_2q4zrWY"
                  allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  />
        </div>
        <div id="score_board-video" className="item_videos">
          <iframe width="560" height="315"
                  title={<IntlMessages id={'topbar.profile.pf-summary.some_video_title2'}/>}
                  src="https://www.youtube.com/embed/ZuUbsIkwUIg"
                  allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  />
        </div>
        <div id="score_board-video" className="item_videos">
          <iframe width="560" height="315"
                  title={<IntlMessages id={'topbar.profile.pf-summary.some_video_title3'}/>}
                  src="https://www.youtube.com/embed/Z2HDjakeb4A"
                  allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  />
        </div>
        <div id="score_board-video" className="item_videos">
          <iframe width="560" height="315"
                  title={<IntlMessages id={'topbar.profile.pf-summary.some_video_title4'}/>}
                  src="https://www.youtube.com/embed/uPdjFb_IDzg"
                  allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  />
        </div>
        <div id="score_board-video" className="item_videos">
          <iframe
            title={<IntlMessages id={'topbar.profile.pf-summary.some_video_title5'}/>}
            width="560" height="315"
            src="https://www.youtube.com/embed/8-kR_xyClmo"
            allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
        </div>
      </div>
    );
  }
}


export default ListOfvideosComponent;
