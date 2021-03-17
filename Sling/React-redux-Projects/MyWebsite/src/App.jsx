import React, { useState } from 'react';
import './App.scss';

import Home from './components/Home/Home';
import Introduction from './components/Introduction/Introduction';
import ListOfProjects from './components/Project-List/ProjectList';
import NavBar from './components/NavBar/NavBar';
import {data} from './Data/ProjectData';

function App() {
  const [tab, setTab] = useState('Home');

  return (
    <div className="main_page">

      <NavBar setTab={setTab}/>

      {tab === 'Home' && <Home />}

      {tab === 'About-me' && <Introduction />}

      {tab === 'Projects' && <ListOfProjects listOfProjects={data}/>}

      <div>
      </div>
    </div>
  );
}

export default App;
