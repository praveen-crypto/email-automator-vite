import './Sidebar.css'
import Logo from '../../../public/brand-icon.svg'

// import { useState } from "react";

import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

// import { Box, IconButton, Typography, useTheme } from "@mui/material";

let Sidebar_ = () => {
  return (
    <Sidebar className="sidebar" backgroundColor='#fff'>
      <div className="header">
        <img className='logo' src={Logo} alt="" />
        <h2 className="title"> Inborto </h2>
      </div>
      <Menu
        className="menuList"
        menuItemStyles= {{
          button: ({ level, active, disabled }) => {
            // only apply styles on first level elements of the tree
            if (level === 0)
              return {
                color: active ? '#3248F3' : '#576D82',
                backgroundColor: active ? '#EFEEFE' : undefined,
                hover: active ? '#EFEEFE' : undefined,
              };
          },
        }}
        >
        
        <MenuItem active={window.location.pathname === "/"} icon={<i className='far fa-house'></i>}  component={<Link to="/"  /> }>  Dashboard</MenuItem>
        <MenuItem active={window.location.pathname === "/inbox"} icon={<i className='far fa-envelope'></i>} component={<Link to="/inbox" />}> Inbox</MenuItem>
        <MenuItem active={window.location.pathname === "/sort-rules"}  icon={<i className='far fa-bars-sort'></i>} component={<Link to="/sort-rules" />}> Sort Rules</MenuItem>
        <MenuItem active={window.location.pathname === "/folder"}  icon={<i className="far fa-folder"></i>} component={<Link to="/folder" />}> Folder</MenuItem>
        <MenuItem active={window.location.pathname === "/labels"}  icon={<i className='far fa-tag'></i>} component={<Link to="/labels" />}> Labels</MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default Sidebar_;
