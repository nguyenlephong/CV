import React from 'react';
import ProgrammingLanguageInfo from './image/ProgrammingLanguages.png';
import Frameworks from './image/FrameWorks.png';
import Databases from './image/Database.png';
import MySkill from './image/skill.png';
import IntlMessages from 'components/intl-message/intlMessages';

import { Grid, Icon } from 'semantic-ui-react';
import './index.scss';
class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorIcon: 'green',
            iconName: 'hand point right outline'
        };
    }

    render() {
        const {colorIcon, iconName} = this.state;
        return (
            <div className="cv-content-profile__skill">
                <h2 className="pf-skill__title"><IntlMessages id={'topbar.menu_skill.title'} /></h2>
                <div className="pf-skill__hardskill">
                    
                    <Grid padded columns={1} relaxed>
                        <Grid.Row columns={2} className="content-block_language">
                            <Grid.Column className="img-description"
                                mobile={16} tablet={5} computer={5}
                                >
                                    <img src={ProgrammingLanguageInfo} alt="Programming languages" />
                            </Grid.Column>
                            <Grid.Column className="text-description"
                                mobile={16} tablet={11} computer={11}
                                >
                                    <div>
                                        <Icon color={colorIcon} name={iconName} /> 
                                        <IntlMessages id={'topbar.skill.proframming_language.description1'} />.
                                    </div>
                                    <div>
                                        <Icon color={colorIcon} name={iconName} /> 
                                        <IntlMessages id={'topbar.skill.proframming_language.description2'} />.
                                    </div>
                                    <div>
                                        <Icon color={colorIcon} name={iconName} /> 
                                        <IntlMessages id={'topbar.skill.proframming_language.description3'} />.
                                    </div>
                                    <div>
                                        <Icon color={colorIcon} name={iconName} /> 
                                        <IntlMessages id={'topbar.skill.proframming_language.description4'} />.
                                    </div>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row columns={2} className="content-block_language">
                            <Grid.Column className="img-description"
                                mobile={16} tablet={5} computer={5}
                                >
                                    <img src={Frameworks} alt="Frameworks" />
                            </Grid.Column>
                            <Grid.Column className="text-description"
                                mobile={16} tablet={11} computer={11}
                                >
                                <div>
                                    <Icon color={colorIcon} name={iconName} /> 
                                    <IntlMessages id={'topbar.skill.framworks.description1'} />.
                                </div>
                                <div>
                                    <Icon color={colorIcon} name={iconName} /> 
                                    <IntlMessages id={'topbar.skill.framworks.description2'} />.
                                </div>
                                <div>
                                    <Icon color={colorIcon} name={iconName} /> 
                                    <IntlMessages id={'topbar.skill.framworks.description3'} />.
                                </div>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row columns={2} className="content-block_language">
                            <Grid.Column className="img-description"
                                mobile={16} tablet={5} computer={5}
                                >
                                    <img src={Databases} alt="Databases" />
                            </Grid.Column>
                            <Grid.Column className="text-description"
                                mobile={16} tablet={11} computer={11}
                                >
                                <div>
                                    <Icon color={colorIcon} name={iconName} /> 
                                    <IntlMessages id={'topbar.skill.database.description1'} />.
                                </div>
                                <div>
                                    <Icon color={colorIcon} name={iconName} /> 
                                    <IntlMessages id={'topbar.skill.database.description2'} />.
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2} className="content-block_language">
                            <Grid.Column className="img-description"
                                mobile={16} tablet={5} computer={5}
                                >
                                    <img src={MySkill} alt="My skill" />
                            </Grid.Column>
                            <Grid.Column className="text-description"
                                mobile={16} tablet={11} computer={11}
                                >
                                <div>
                                    <Icon color={colorIcon} name={iconName} /> 
                                    <IntlMessages id={'topbar.skill.other.description1'} />.
                                </div>
                                <div>
                                    <Icon color={colorIcon} name={iconName} /> 
                                    <IntlMessages id={'topbar.skill.other.description2'} />.
                                </div>
                                <div>
                                    <Icon color={colorIcon} name={iconName} /> 
                                    <IntlMessages id={'topbar.skill.other.description3'} />.
                                </div>
                                <div>
                                    <Icon color={colorIcon} name={iconName} /> 
                                    <IntlMessages id={'topbar.skill.other.description4'} />.
                                </div>
                                <div>
                                    <Icon color={colorIcon} name={iconName} /> 
                                    <IntlMessages id={'topbar.skill.other.description5'} />.
                                </div>
                            </Grid.Column>
                        </Grid.Row>

                    </Grid>

                </div>
            </div>
        );
    }
}


export default Work;
