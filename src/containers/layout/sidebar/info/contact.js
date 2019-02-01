import React from 'react';
import { Grid,  } from 'semantic-ui-react';
import './info.scss';
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
                address: 'KP6, phường Linh Trung, quận Thủ Đức, Đại học Nông Lâm TP HCM'
            }
        };
    } 

    render() {
        const {contact} = this.state;
        return (
            <div className="cv-sidebar__personal">
                <Grid padded columns={1} relaxed>
                    <Grid.Row columns={1} className="sb-content-personal-title__wrapper">
                        <h3 className="sb-content-personal__title"> Contact </h3>
                    </Grid.Row>
                    <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={16} tablet={6} computer={6}
                            width={6}>
                            <span className="sb-personal__title"> Mobile: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={10} computer={10}

                            width={10}>
                            <span className="sb-personal__description">{contact.mobile}</span>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={16} tablet={6} computer={6}
                            width={6}>
                            <span className="sb-personal__title"> Home: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={10} computer={10}
                            width={10}>
                            <span className="sb-personal__description">{contact.home} </span>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={16} tablet={6} computer={6}
                            width={6}>
                            <span className="sb-personal__title"> Email: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={10} computer={10}
                            width={10}>
                            <span className="sb-personal__description">{contact.email} </span>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={16} tablet={6} computer={6}
                            width={6}>
                            <span className="sb-personal__title"> Email Student: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={10} computer={10}
                            width={10}>
                            <span className="sb-personal__description">{contact.emailStudent} </span>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={16} tablet={6} computer={6}
                            width={6}>
                            <span className="sb-personal__title"> Skype: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={10} computer={10}
                            width={10}>
                            <span className="sb-personal__description">{contact.skype} </span>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2} className="cv-sidebar-content__personal">
                        <Grid.Column 
                            mobile={16} tablet={6} computer={6}
                            width={6}>
                            <span className="sb-personal__title"> Address: </span>
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={10} computer={10}
                            width={10}>
                            <span className="sb-personal__description">{contact.address} </span>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}


export default Contact;
