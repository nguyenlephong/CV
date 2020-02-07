import React from 'react';
import './ListOfVideos.style.scss'; 
import ScoreBoard from 'images/profile/score_board.JPG';
import Award from 'images/profile/Award.jpg';
import CertificateBestOfRookie from 'images/profile/certificate_best.JPG';
import Essay from 'images/profile/Essay.JPG';
import CertificateTester from 'images/profile/certificate_tester.JPG';
import Avatar from 'images/profile/avartar.jpg';
class ListOfvideosComponent extends React.Component {

    render() {
        
        return (
            <div className="list-of-video_wrapper">
                <div id="score_board-video" className="item_videos"  >
                    <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/WCy_2q4zrWY" 
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                </div>
                <div id="score_board-video" className="item_videos"  >
                    <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/ZuUbsIkwUIg" 
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                </div>
                <div id="score_board-video" className="item_videos"  >
                    <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/Z2HDjakeb4A" 
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                </div>
                <div id="score_board-video" className="item_videos"  >
                    <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/uPdjFb_IDzg" 
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                </div>
                <div id="score_board-video" className="item_videos"  >
                    <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/8-kR_xyClmo" 
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                </div>
            </div>
        );
    }
}


export default ListOfvideosComponent;
