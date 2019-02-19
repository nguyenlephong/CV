import React from 'react';
import { Grid,  } from 'semantic-ui-react';
import './info.scss';
import IntlMessages from 'components/intl-message/intlMessages';

class Personal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personal: {
                name: 'Nguyễn Lê Phong',
                birthday: '01 - 07 - 1997',
                relationship: 'Sinh viên',
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
                        <h3 className="sb-content-personal__title">
                            <IntlMessages id={'sidebar.personal'} />
                        </h3>
                    </Grid.Row>
                    <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={5} tablet={6} computer={6} >
                            <span className="sb-personal__title"> <IntlMessages id={'sidebar.personal_name'} />: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={11} tablet={10} computer={10} >
                            <span className="sb-personal__description"><IntlMessages id={'sidebar.personal_nameDetail'} /></span>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={5} tablet={6} computer={6} >
                            <span className="sb-personal__title"> <IntlMessages id={'sidebar.personal_birthday'} />: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={11} tablet={10} computer={10} >
                            <span className="sb-personal__description">{personal.birthday} </span>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}


export default Personal;
