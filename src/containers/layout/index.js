import React from 'react';
import { Grid, Button, } from 'semantic-ui-react';
import './layout-main.scss';
class MainLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    } 

    render() {
        return (
            <div className="cv-main-layout">
                <Button>Click Here</Button>
                <Grid  padded columns={1} relaxed>
                    <Grid.Row>
                        <Grid.Column 
                            mobile={16} tablet={16} computer={16}
                            width={16} color="orange">
                            <div className="cv-header-wrapper">a</div>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={2}>
                        <Grid.Column 
                            mobile={16} tablet={4} computer={4}
                           >
                            <div className="cv-sidebar-wrapper">a</div>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={12} computer={12}
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
