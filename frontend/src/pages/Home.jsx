import React, { useState } from 'react';
import Sildebar from '../components/Sildebar';
import { Outlet } from 'react-router-dom';

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
    <div className='homediv'>
    <button className='navbar-toggle' onClick={toggleSidebar}>
    <ion-icon name={isSidebarOpen ? 'close' : 'menu'}/>
  </button>
      <div className={`hdiv1 ${isSidebarOpen ? 'open' : ''}`}>
        <Sildebar onCloseSidebar={closeSidebar} />
      </div>
      <div className='hdiv2'>
        <Outlet />
      </div>
    </div>
    </>
  );
}

export default Home;
