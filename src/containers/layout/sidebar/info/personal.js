import React from 'react';
import { Grid,  } from 'semantic-ui-react';
import './info.scss';
class Personal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personal: {
                name: 'Nguyễn Lê Phong',
                birthday: '01 - 07 - 1997',
                relationship: 'Single',
                nationality: 'Việt Nam',
                languages: 'Tiếng Việt'
            }
        };
    } 

    render() {
        const {personal} = this.state;
        return (
            <div className="cv-sidebar__personal">
                <Grid padded columns={1} relaxed>
                    <Grid.Row columns={1} className="sb-content-personal-title__wrapper">
                        <h3 className="sb-content-personal__title"> Personal </h3>
                    </Grid.Row>
                    <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={16} tablet={6} computer={6}
                            width={6}>
                            <span className="sb-personal__title"> Name: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={10} computer={10}

                            width={10}>
                            <span className="sb-personal__description">{personal.name}</span>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={16} tablet={6} computer={6}
                            width={6}>
                            <span className="sb-personal__title"> Birthday: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={10} computer={10}
                            width={10}>
                            <span className="sb-personal__description">{personal.birthday} </span>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={16} tablet={6} computer={6}
                            width={6}>
                            <span className="sb-personal__title"> Relationship: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={10} computer={10}
                            width={10}>
                            <span className="sb-personal__description">{personal.relationship} </span>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={16} tablet={6} computer={6}
                            width={6}>
                            <span className="sb-personal__title"> Nationality: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={10} computer={10}
                            width={10}>
                            <span className="sb-personal__description">{personal.nationality} </span>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={16} tablet={6} computer={6}
                            width={6}>
                            <span className="sb-personal__title"> Languages: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={10} computer={10}
                            width={10}>
                            <span className="sb-personal__description">{personal.languages} </span>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}


export default Personal;
