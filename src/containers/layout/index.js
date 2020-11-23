import React from 'react';
import classNames from 'classnames';
import {Affix,} from 'antd';
import {Grid, Menu, Sidebar,} from 'semantic-ui-react';
import './layout-main.scss';

import SidebarContent from 'containers/layout/sidebar/index';
import Content from 'containers/layout/content/index';
import MenuContent from 'containers/layout/menu/index';
import PropTypes from 'prop-types';

const VerticalSidebar = ({animation, direction, visible}) => (
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
    // itemMenuActive: 'project',
    itemMenuActive: 'profile',
    vertical: false,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,

  }

  handleItemClick = (e, {name}) => {
    this.setState({itemMenuActive: name})
  }

  updateDimensions() {
    this.setState({screenWidth: window.innerWidth, screenHeight: window.innerHeight});
    if (window.innerWidth < 680) {
      this.setState({vertical: true,});
    } else {
      this.setState({vertical: false,});
    }

    if (window.innerWidth > 680 && window.innerWidth < 1100) {
      this.setState({isOpen: false});
    } else {
      this.setState({isOpen: true});
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    const {isOpen, screenHeight, screenWidth} = this.state;
    return (
      <div className="cv-main-layout">
        <Grid padded columns={1} relaxed>
          <Grid.Row>
            <Grid.Column
              mobile={16} tablet={16} computer={16}>
              <div className="cv-header-wrapper">
              </div>
            </Grid.Column>
          </Grid.Row>


          <Grid.Row columns={2}>
            <Grid.Column
              mobile={16} tablet={(isOpen) ? 4 : 0} computer={(isOpen) ? 4 : 0}
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
              mobile={16} tablet={(isOpen) ? 12 : 16} computer={(isOpen) ? 12 : 16}
            >
              <div className="cv-content-wrapper">

                {(this.state.vertical) ?
                  <MenuContent
                    hideSidebar={() => this.setState({isOpen: true})}
                    showSidebar={() => this.setState({isOpen: false})}
                    isOpenSidebar={this.state.isOpen}
                    handleActiveItemMenu={this.handleItemClick}
                    activeItem={this.state.itemMenuActive}
                    vertical={this.state.vertical}
                  /> :
                  <Affix offsetTop={10}>
                    <MenuContent
                      hideSidebar={() => this.setState({isOpen: true})}
                      showSidebar={() => this.setState({isOpen: false})}
                      isOpenSidebar={this.state.isOpen}
                      handleActiveItemMenu={this.handleItemClick}
                      activeItem={this.state.itemMenuActive}
                      vertical={this.state.vertical}
                    />
                  </Affix>
                }
                <Content
                  screenHeight={screenHeight}
                  screenWidth={screenWidth}
                  itemMenuActive={this.state.itemMenuActive}/>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}


export default MainLayout;
