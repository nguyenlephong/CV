import React from 'react';
import { Grid,  } from 'semantic-ui-react';
import './content.scss';
import ProfileSumary from 'containers/layout/content/info/ProfileSumary';
import Education from 'containers/layout/content/info/Education';
import Skill from 'containers/layout/content/info/Skill';
import Experience from 'containers/layout/content/info/Experience';
import MyProject from 'containers/layout/content/info/MyProject';
class ProfileContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    } 

    render() {
        return (
            <Grid padded columns={1} relaxed>
                <Grid.Row columns={1} className="cv-content-block">
                    <Grid.Column 
                        mobile={16} tablet={16} computer={16}
                        >
                        <ProfileSumary/>
                        
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1} className="cv-content-block">
                    <Grid.Column 
                        mobile={16} tablet={16} computer={16}
                        >
                        <Skill/>
                        
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1} className="cv-content-block">
                    <Grid.Column 
                        mobile={16} tablet={16} computer={16}
                        >
                        <Education/>
                        
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1} className="cv-content-block">
                    <Grid.Column 
                        mobile={16} tablet={16} computer={16}
                        >
                        <MyProject/>
                        
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1} className="cv-content-block">
                    <Grid.Column 
                        mobile={16} tablet={16} computer={16}
                        >
                        <Experience/>
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}


export default ProfileContent;
