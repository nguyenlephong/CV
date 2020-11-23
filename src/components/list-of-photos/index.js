import React from 'react';
import './ListOfPhotos.style.scss';
import ScoreBoard from 'images/profile/score_board.JPG';
import Award from 'images/profile/Award.jpg';
import CertificateBestOfRookie from 'images/profile/certificate_best.JPG';
import Essay from 'images/profile/Essay.JPG';
import CertificateTester from 'images/profile/certificate_tester.JPG';
import Avatar from 'images/profile/avartar.jpg';

class ListOfPhotosComponent extends React.Component {

  changeFullScreen = (id) => {
    var elem = document.getElementById(id);
    if (elem) {
      this.openFullscreen(elem);
    }
  }

  openFullscreen = (elem) => {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

  render() {

    return (
      <div className="list-of-photo_wrapper">
        <div id="score_board-photo"
             style={{
               backgroundImage: `url(${ScoreBoard})`
             }}
             className="item_photos"
             onClick={() => this.changeFullScreen("score_board-photo")}>

        </div>
        <div id="Award-photo"
             style={{
               backgroundImage: `url(${Award})`
             }}
             className="item_photos"
             onClick={() => this.changeFullScreen("Award-photo")}>

        </div>
        <div id="CertificateBestOfRookie-photo"
             style={{
               backgroundImage: `url(${CertificateBestOfRookie})`
             }}
             className="item_photos"
             onClick={() => this.changeFullScreen("CertificateBestOfRookie-photo")}>
        </div>
        <div id="CertificateTester-photo"
             style={{
               backgroundImage: `url(${CertificateTester})`
             }}
             className="item_photos"
             onClick={() => this.changeFullScreen("CertificateTester-photo")}>

        </div>
        <div id="Essay-photo"
             style={{
               backgroundImage: `url(${Essay})`
             }}
             className="item_photos"
             onClick={() => this.changeFullScreen("Essay-photo")}>

        </div>
        <div id="Avatar-photo"
             style={{
               backgroundImage: `url(${Avatar})`
             }}
             className="item_photos"
             onClick={() => this.changeFullScreen("Avatar-photo")}>
        </div>
      </div>
    );
  }
}


export default ListOfPhotosComponent;
