 import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


import Sidebar_ from './pages/global/sidebar/Sidebar';

import Dashboard from './pages/dashboard/dashboard';

import SortRules from './pages/sortRules/SortRules';
import Inbox from './pages/inbox';
import Labels from './pages/labels';
import Folder from './pages/folder';

import Topbar from './pages/global/topbar';

function App() {
  // const [isSidebar, setIsSidebar] = useState(true);
  
  const [Title, setTitle] = useState("Dashboard");
  
  return (
    <>
      <div className='app'>
        <Sidebar_ />
        
        <main className='content'>
          <Topbar title={Title}/>
          
          <Routes>
            <Route path='/' element={ <Dashboard setTitle={setTitle} /> } />
            <Route path='/inbox' element={ <Inbox setTitle={setTitle} /> } />
            <Route path='/sort-rules' element={ <SortRules  setTitle={setTitle} /> } />
            <Route path='/folder' element={ <Folder setTitle={setTitle} /> } />
            <Route path='/labels' element={ <Labels setTitle={setTitle} /> } />
          </Routes>
        </main>
        
        {/* <h1>Welcome to my app</h1> */}
        {/* <ContainedButtons /> */}
        
      </div>
    </> 
  )
}

export default App
