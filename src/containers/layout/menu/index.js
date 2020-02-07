import React, { Component } from 'react';
import {  Menu, Dropdown, Flag } from 'semantic-ui-react';
import './index.css';
import IntlMessages from 'components/intl-message/intlMessages';

import { connect } from 'react-redux';
import actions from 'redux/languageSwitcher/actions';

const { changeLanguage } = actions;

class MenuExampleIcons extends Component {
  state = { 
    activeItem: 'profile',
  }

  handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name })
      this.props.handleActiveItemMenu(e, {name});
  }


  render() {
    const { activeItem } = this.state
    const {hideSidebar, showSidebar, isOpenSidebar, vertical, changeLanguage} = this.props;
    return (
      <Menu style={{
        width: '100% !important',  
        backgroundColor: '#d6d6d6', 
        color: '#0c278c'
        }} vertical={vertical} icon color="brown">

        {(!isOpenSidebar)?
          <Menu.Item name='showSidebar' active={activeItem === 'showSidebar'} onClick={hideSidebar}>
            <IntlMessages id={'topbar.menu_showInfo'} />
          </Menu.Item>
        : 
        <Menu.Item name='hideSidebar' active={activeItem === 'hideSidebar'} onClick={showSidebar}>
          <IntlMessages id={'topbar.menu_hideInfo'} />
        </Menu.Item>
        } 


        <Menu.Item
          name='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        >
          {/* <Icon name='video camera' /> */}
          <IntlMessages id={'topbar.menu_profile'} />

        </Menu.Item>

        <Menu.Item
          name='skill'
          active={activeItem === 'skill'}
          onClick={this.handleItemClick}
        >
          {/* <Icon name='video play' /> */}
          <IntlMessages id={'topbar.menu_skill'} />

        </Menu.Item>

        <Menu.Item
          name='project'
          active={activeItem === 'project'}
          onClick={this.handleItemClick}
        >
          {/* <Icon name='video play' /> */}
          <IntlMessages id={'topbar.menu_project'} />

        </Menu.Item>


        <Menu.Item
          name='link'
          active={activeItem === 'link'}
          onClick={this.handleItemClick}
        >
          <IntlMessages id={'topbar.menu_link'} />
        </Menu.Item>
        
        <a href="./CV/CV_v1.pdf">
          <Menu.Item
            name='download'
            active={activeItem === 'download'}
            onClick={this.handleItemClick}
          >
            <IntlMessages id={'topbar.menu_download'} />
          </Menu.Item>
        </a>

        <Menu.Menu position='right'>
          <Dropdown item text={<IntlMessages id={'topbar.menu_language'} />}>
            <Dropdown.Menu>
              <Dropdown.Item 
                icon={<Flag name='vn' />} value="Vietnamese" 
                text={<IntlMessages id={'topbar.language.vietnam'} />} 
                onClick={(event, data)=>changeLanguage(data.value)} />
              <Dropdown.Item 
                icon={<Flag name='us'/>} value="english" 
                text={<IntlMessages id={'topbar.language.english'} />} 
                onClick={(event, data)=>changeLanguage(data.value)} />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default connect(
  state => ({
    ...state.LanguageSwitcher,
  }),
  { changeLanguage}
)(MenuExampleIcons);

