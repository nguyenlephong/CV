import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import './index.scss';
import IntlMessages from 'components/intl-message/intlMessages';

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
            },
            colorIcon: 'brown',
            iconName: 'hand point right outline',
        };
    } 

    render() {
        const {link, shortLink, colorIcon, iconName, } = this.state;
        return (
             <div className="cv-content-profile__sumary">
                <h2 className="pf-sumary__title"><IntlMessages id={'topbar.menu_link.title'} /></h2>
                
                <div className="pf-sumary__block_description">
                    <span className="pf-sumary__description">
                    <IntlMessages id={'topbar.menu_link.summary'} />
                    </span>
                </div>
                <Grid padded columns={1} relaxed>
                    
                    <Grid.Row columns={2} className="cv-content_link">
                        <Grid.Column 
                            mobile={16} tablet={4} computer={3} >
                            <span className="link__title-description"> 
                                <Icon color={colorIcon} name={iconName} /> Facebook: 
                            </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={12} computer={13} >
                            <a href={link.facebook}  className="link__strong">{shortLink.facebook}</a>
                        </Grid.Column>
                    </Grid.Row>
                    
                    <Grid.Row columns={2} className="cv-content_link">
                        <Grid.Column 
                            mobile={16} tablet={4} computer={3} >
                            <span className="link__title-description"> 
                                <Icon color={colorIcon} name={iconName} /> Blog: 
                            </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={12} computer={13} >
                            <a href={link.blog}  className="link__strong">{shortLink.blog}</a>
                        </Grid.Column>
                    </Grid.Row>
                    
                    <Grid.Row columns={2} className="cv-content_link">
                        <Grid.Column 
                            mobile={16} tablet={4} computer={3} >
                            <span className="link__title-description"> 
                                <Icon color={colorIcon} name={iconName} /> Twitter: 
                            </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={12} computer={13} >
                            <a href={link.twitter}  className="link__strong">{shortLink.twitter}</a>
                        </Grid.Column>
                    </Grid.Row>
                    
                    <Grid.Row columns={2} className="cv-content_link">
                        <Grid.Column 
                            mobile={16} tablet={4} computer={3} >
                            <span className="link__title-description"> 
                                <Icon color={colorIcon} name={iconName} /> Youtube: 
                            </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={12} computer={13} >
                            <a href={link.youtube}  className="link__strong">{shortLink.youtube}</a>
                        </Grid.Column>
                    </Grid.Row>
                    
                    <Grid.Row columns={2} className="cv-content_link">
                        <Grid.Column 
                            mobile={16} tablet={4} computer={3} >
                            <span className="link__title-description"> 
                                <Icon color={colorIcon} name={iconName} /> Github: 
                            </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={12} computer={13} >
                            <a href={link.github}  className="link__strong">{shortLink.github}</a>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </div>
        );
    }
}


export default Link;
