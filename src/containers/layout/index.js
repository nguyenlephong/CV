import React from 'react';
import classNames from 'classnames';
import { Affix, Button } from 'antd';
import { 
    Grid, 
    Menu,
    Sidebar,
} from 'semantic-ui-react';
import './layout-main.scss';
import SidebarContent from 'containers/layout/sidebar/index';
import Content from 'containers/layout/content/index';
import PropTypes from 'prop-types';
const VerticalSidebar = ({ animation, direction, visible }) => (
    <Sidebar
      as={Menu}
      animation={animation}
      direction={direction}
      visible={visible}
      width='wide'
      
    >
      <SidebarContent/>
    </Sidebar>
  )
  
  VerticalSidebar.propTypes = {
    animation: PropTypes.string,
    direction: PropTypes.string,
    visible: PropTypes.bool,
  }
class MainLayout extends React.Component {
    state = {
        isOpen: true,
    }
    

    render() {
        const {  isOpen } = this.state
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

                    <Affix offsetTop={10} >
                        <Button type="primary"  onClick={()=> this.setState({isOpen: !isOpen})} >
                           {(isOpen)?'Ẩn thông tin!' : 'Xem thông tin!'} 
                        </Button>
                    </Affix>
                    <Grid.Row columns={2}>
                        <Grid.Column 
                            mobile={16} tablet={(isOpen)?5:0} computer={(isOpen)?5:0}
                            >
                            <div  
                                className={
                                    classNames({
                                    "cv-sidebar-wrapper": true,
                                    'cv-open': isOpen,
                                    'cv-close': !isOpen
                                })
                                }
                            >
                                <SidebarContent/>
                            </div>  
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={(isOpen)?11:16} computer={(isOpen)?11:16}
                            >
                            <div className="cv-content-wrapper">
                                <Content/>
                            </div>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}


export default MainLayout;
