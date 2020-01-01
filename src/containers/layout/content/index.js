import React from 'react';
import { Grid, } from 'semantic-ui-react';
import './content.scss';
import ProfileSumary from 'containers/layout/content/info/ProfileSumary';
// import Education from 'containers/layout/content/info/Education';
import Skill from 'containers/layout/content/info/Skill';
import Link from 'containers/layout/content/info/link';
import MyProject from 'containers/layout/content/info/MyProject';


class ProfileContent extends React.Component {

    render() {
        const { itemMenuActive, screenHeight,  } = this.props;
        return (
            <Grid padded columns={1} relaxed>
                 
                <Grid.Row columns={1} 
                    style={{
                        height: screenHeight-95
                    }}
                    className="cv-content-block">
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
                            (itemMenuActive==='link')?
                            <Link/>:
                            <div></div>
                        }
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}


export default ProfileContent;
