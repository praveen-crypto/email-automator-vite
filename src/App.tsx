import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


import Sidebar_ from './pages/global/Sidebar';

import Home from './pages/home';

import SortRules from './pages/SortRules';
import Inbox from './pages/inbox';
import Labels from './pages/labels';
import Folder from './pages/folder';

// import Topbar from './pages/global/Topbar';

// import ContainedButtons from './components/containedButtons';
// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

function App() {
  // const [isSidebar, setIsSidebar] = useState(true);
  
  const [Title, setTitle] = useState("Dashboard");
  
  return (
    <>
      <div className='app'>
        <Sidebar_ />

        <main className='content'>
          {/* <Topbar title={Title}/> */}
          {Title}
          
          <Routes>
            <Route path='/' element={ <Home setTitle={setTitle} /> } />
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
