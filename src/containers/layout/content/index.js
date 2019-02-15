import React from 'react';
import { Grid, } from 'semantic-ui-react';
import './content.scss';
import ProfileSumary from 'containers/layout/content/info/ProfileSumary';
// import Education from 'containers/layout/content/info/Education';
import Skill from 'containers/layout/content/info/Skill';
import Experience from 'containers/layout/content/info/Experience';
import MyProject from 'containers/layout/content/info/MyProject';

class ProfileContent extends React.Component {

    render() {
        const { itemMenuActive } = this.props
        console.log(itemMenuActive);
        return (
            <Grid padded columns={1} relaxed>

                <Grid.Row columns={1} className="cv-content-block">
                    <Grid.Column 
                        mobile={16} tablet={16} computer={16}
                        >
                        {
                            (itemMenuActive==='profile')?
                            <ProfileSumary/>:
                            (itemMenuActive==='skill')?
                            <Skill/>:
                            (itemMenuActive==='project')?
                            <MyProject/>:
                            (itemMenuActive==='experience')?
                            <Experience/>:
                            <div></div>

                        }
                        
                    </Grid.Column>
                </Grid.Row>
                {/* <Grid.Row columns={1} className="cv-content-block">
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
                        <MyProject/>
                        
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1} className="cv-content-block">
                    <Grid.Column 
                        mobile={16} tablet={16} computer={16}
                        >
                        <Experience/>
                        
                    </Grid.Column>
                </Grid.Row> */}
                
            </Grid>
        );
    }
}


export default ProfileContent;
