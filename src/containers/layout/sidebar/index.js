import React from 'react';
import { Grid, Image, } from 'semantic-ui-react';
import './sidebar-main.scss';
import ImgAvartar from 'images/profile/avartar.jpg';
import Personal from './info/personal';
import Contact from './info/contact';
import Link from './info/link';
class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    } 

    render() {
        return (
            <div className="cv-main-sidebar">
                <Grid padded columns={1} relaxed>
                    <Grid.Row>
                        <Grid.Column 
                            mobile={16} tablet={16} computer={16} >
                            <div className="cv-header-sidebar-wrapper">
                                <Image 
                                    centered
                                    avatar
                                    bordered
                                    // fluid
                                    rounded
                                    src={ImgAvartar} size='small' circular />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid padded columns={1} relaxed>
                    <Personal/>
                    <Contact/>
                    {/* <Link/> */}
                </Grid>
            </div>
        );
    }
}


export default Sidebar;
