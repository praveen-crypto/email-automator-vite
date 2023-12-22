import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { CssBaseline, ThemeProvider } from "@mui/material";

import Topbar from './pages/global/Topbar';
import Dashboard from './pages/dashboard';
import Sidebar_ from './pages/global/Sidebar';
import Home from './pages/home';

import ContainedButtons from './components/containedButtons';

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import { Link } from 'react-router-dom';
import React from 'react';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};


function App() {
  const [isSidebar, setIsSidebar] = useState(true);
  
  return (
    <>
      <div className='app'>
        <Sidebar>
          <Menu
            menuItemStyles={{
              button: {
                // the active class will be added automatically by react router
                // so we can use it to style the active menu item
                [`&.active`]: {
                  backgroundColor: '#13395e',
                  color: '#b6c8d9',
                },
              },
            }}
          >
            <MenuItem component={<Link to="/documentation" />}> Documentation</MenuItem>
            <MenuItem component={<Link to="/calendar" />}> Calendar</MenuItem>
            <MenuItem component={<Link to="/e-commerce" />}> E-commerce</MenuItem>
          </Menu>
        </Sidebar>

        <main className='content'>
          <Topbar/>

          <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/scrollRules' element={ <Home/> }/>
          </Routes>
        </main>

        <h1>Welcome to my app</h1>
        <ContainedButtons />

        {/* <div className="img">
          <h1>{user.name}</h1>
          <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            style={{
              width: user.imageSize,
              height: user.imageSize
            }}
          />
        </div> */}
      </div>
      
    </> 
  )
}

export default App
