import React from 'react';
import { Grid,  } from 'semantic-ui-react';
import './info.scss';
class Link extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link: {
                facebook: 'https://www.facebook.com/NguyenLePhong0107',
                blog: 'http://chiasekienthuc.azurewebsites.net/',
                youtube: 'https://www.youtube.com/channel/UCVT2aPzoLT4Qj64VpDBvxuw',
                twitter: 'https://twitter.com/nguyenlephong17',
                github: 'https://github.com/lephong2017'
            },
            shortLink: {
                facebook: "http://bit.ly/2DMnUdl",
                blog: "http://bit.ly/2MQGGn7",
                youtube: "http://bit.ly/2D0vpfn",
                twitter: "http://bit.ly/2S1t8e7",
                github: "http://bit.ly/2RyTy1M"


            }
        };
    } 

    render() {
        const {link, shortLink} = this.state;
        return (
            <div className="cv-sidebar__personal">
                <Grid padded columns={1} relaxed>
                    <Grid.Row columns={1} className="sb-content-personal-title__wrapper">
                        <h3 className="sb-content-personal__title"> Link </h3>
                    </Grid.Row>
                    <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={5} tablet={6} computer={6}
                            width={6}>
                            <span className="sb-personal__title"> Facebook: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={11} tablet={10} computer={10}

                            width={10}>
                            <a href={link.facebook}  className="sb-personal__description">{shortLink.facebook}</a>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={5} tablet={6} computer={6}
                            width={6}>
                            <span className="sb-personal__title"> Blog: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={11} tablet={10} computer={10}
                            width={10}>
                            <a href={link.blog}  className="sb-personal__description">{shortLink.blog} </a>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={5} tablet={6} computer={6}
                            width={6}>
                            <span className="sb-personal__title"> Youtube: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={11} tablet={10} computer={10}
                            width={10}>
                            <a href={link.youtube}  className="sb-personal__description">{shortLink.youtube} </a>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={5} tablet={6} computer={6}
                            width={6}>
                            <span className="sb-personal__title"> Twitter: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={11} tablet={10} computer={10}
                            width={10}>
                            <a href={link.twitter}  className="sb-personal__description">{shortLink.twitter} </a>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={5} tablet={6} computer={6}
                            width={6}>
                            <span className="sb-personal__title"> Github: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={11} tablet={10} computer={10}
                            width={10}>
                            <a href={link.github}  className="sb-personal__description">{shortLink.github} </a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}


export default Link;
