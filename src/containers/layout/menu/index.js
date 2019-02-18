import React, { Component } from 'react';
import {  Menu } from 'semantic-ui-react';
import './index.css';
export default class MenuExampleIcons extends Component {
  state = { 
    activeItem: 'anhmap',
  }

  handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name })
      this.props.handleActiveItemMenu(e, {name});
  }


  render() {
    const { activeItem } = this.state
    const {hideSidebar, showSidebar, isOpenSidebar, vertical} = this.props;
    return (
      <Menu styles={{width: '100% !importance'}} vertical={vertical} icon color="brown">

        {(!isOpenSidebar)?
          <Menu.Item name='showSidebar' active={activeItem === 'showSidebar'} onClick={hideSidebar}>
            Xem thông tin
          </Menu.Item>
        : 
          <Menu.Item name='hideSidebar' active={activeItem === 'hideSidebar'} onClick={showSidebar}>
            Ẩn thông tin
          </Menu.Item>
        } 


        <Menu.Item
          name='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        >
          {/* <Icon name='video camera' /> */}
          Profile
        </Menu.Item>

        <Menu.Item
          name='skill'
          active={activeItem === 'skill'}
          onClick={this.handleItemClick}
        >
          {/* <Icon name='video play' /> */}
          Skill
        </Menu.Item>

        <Menu.Item
          name='project'
          active={activeItem === 'project'}
          onClick={this.handleItemClick}
        >
          {/* <Icon name='video play' /> */}
          Project
        </Menu.Item>


        <Menu.Item
          name='link'
          active={activeItem === 'link'}
          onClick={this.handleItemClick}
        >
          {/* <Icon name='video play' /> */}
          Link
        </Menu.Item>
      </Menu>
    )
  }
}