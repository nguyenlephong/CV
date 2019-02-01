import React from 'react';
import { Grid,  } from 'semantic-ui-react';
import './layout-main.scss';
import Sidebar from 'containers/layout/sidebar/index';
class MainLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    } 

    render() {
        return (
            <div className="cv-main-layout">
                <Grid padded columns={1} relaxed>
                    <Grid.Row>
                        <Grid.Column 
                            mobile={16} tablet={16} computer={16}
                            width={16}>
                            <div className="cv-header-wrapper">
                            </div>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={2}>
                        <Grid.Column 
                            mobile={16} tablet={5} computer={5}
                            >
                            <div className="cv-sidebar-wrapper">
                                <Sidebar/>
                            </div>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={11} computer={11}
                            >
                            <div className="cv-content-wrapper">a</div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}


export default MainLayout;
