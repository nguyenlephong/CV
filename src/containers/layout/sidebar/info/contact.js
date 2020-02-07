import React from 'react';
import { Grid,  } from 'semantic-ui-react';
import './info.scss';
import IntlMessages from 'components/intl-message/intlMessages';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: {
                mobile: '0985490107',
                home: '0343081355',
                email: 'nguyenlephong1997@gmail.com',
                emailStudent: '15130136@st.hcmuaf.edu.vn',
                skype: '0985490107',
                address: 'Nguyễn Oanh, quận Gò Vấp'
            }
        };
    } 

    render() {
        const {contact} = this.state;
        return (
            <div className="cv-sidebar__personal">
                <Grid padded columns={1} relaxed>
                    <Grid.Row columns={1} className="sb-content-personal-title__wrapper">
                        <h3 className="sb-content-personal__title"> <IntlMessages id={'sidebar.contact'} /> </h3>
                    </Grid.Row>
                    <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={16} tablet={16} computer={16} >
                            <span className="sb-personal__title"> <IntlMessages id={'sidebar.contact_mobile'} />: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={16} computer={16} >
                            <span className="sb-personal__description">{contact.mobile}</span>
                        </Grid.Column>
                    </Grid.Row>
                    {/* <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={16} tablet={16} computer={16} >
                            <span className="sb-personal__title"> <IntlMessages id={'sidebar.contact_home'} />: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={16} computer={16} >
                            <span className="sb-personal__description">{contact.home} </span>
                        </Grid.Column>
                    </Grid.Row> */}
                    <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={16} tablet={16} computer={16} >
                            <span className="sb-personal__title"> <IntlMessages id={'sidebar.contact_email'} />: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={16} computer={16} >
                            <span className="sb-personal__description">{contact.email} </span>
                        </Grid.Column>
                    </Grid.Row>
                    {/* <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={16} tablet={16} computer={16} >
                            <span className="sb-personal__title"> <IntlMessages id={'sidebar.contact_emailStudent'} />: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={16} computer={16} >
                            <span className="sb-personal__description">{contact.emailStudent} </span>
                        </Grid.Column>
                    </Grid.Row> */}
                    <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={16} tablet={16} computer={16} >
                            <span className="sb-personal__title"> <IntlMessages id={'sidebar.contact_address'} />: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={16} computer={16}     >
                            <span className="sb-personal__description"><IntlMessages id={'sidebar.contact_addressDetail'} /> </span>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}


export default Contact;
