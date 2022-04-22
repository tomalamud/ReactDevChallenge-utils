import React from 'react';
import Sidebar from './components/Sidebar';
import Panel from './components/Panel';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <div className='flex'>        
        <Sidebar className="grow"/>
        <Panel className="grow-[2]"/>
      </div>
    </>
  );
}

export default App;
