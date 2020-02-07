import React from 'react';
import './ListOfVideos.style.scss'; 
import ScoreBoard from 'images/profile/score_board.JPG';
import Award from 'images/profile/Award.jpg';
import CertificateBestOfRookie from 'images/profile/certificate_best.JPG';
import Essay from 'images/profile/Essay.JPG';
import CertificateTester from 'images/profile/certificate_tester.JPG';
import Avatar from 'images/profile/avartar.jpg';
class ListOfvideosComponent extends React.Component {

    changeFullScreen=(id)=> {
        var elem = document.getElementById(id);
        if(elem){
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
            <div className="list-of-video_wrapper">
                <div id="score_board-video" 
                    style={{
                        backgroundImage: `url(${ScoreBoard})`
                    }}
                    className="item_videos" 
                    onClick={()=>this.changeFullScreen("score_board-video")}>

                </div>
                <div id="Award-video" 
                    style={{
                        backgroundImage: `url(${Award})`
                    }}
                    className="item_videos" 
                    onClick={()=>this.changeFullScreen("Award-video")}>

                </div>
                <div id="CertificateBestOfRookie-video" 
                    style={{
                        backgroundImage: `url(${CertificateBestOfRookie})`
                    }}
                    className="item_videos" 
                    onClick={()=>this.changeFullScreen("CertificateBestOfRookie-video")}>
                </div>
                <div id="CertificateTester-video" 
                    style={{
                        backgroundImage: `url(${CertificateTester})`
                    }}
                    className="item_videos" 
                    onClick={()=>this.changeFullScreen("CertificateTester-video")}>

                </div>
                <div id="Essay-video" 
                    style={{
                        backgroundImage: `url(${Essay})`
                    }}
                    className="item_videos" 
                    onClick={()=>this.changeFullScreen("Essay-video")}>

                </div>
                <div id="Avatar-video" 
                    style={{
                        backgroundImage: `url(${Avatar})`
                    }}
                    className="item_videos" 
                    onClick={()=>this.changeFullScreen("Avatar-video")}>
                </div>
            </div>
        );
    }
}


export default ListOfvideosComponent;
