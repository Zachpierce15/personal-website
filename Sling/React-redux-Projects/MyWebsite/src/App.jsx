import React, { useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import {addImages} from './features/home/homeSlice';
import axios from 'axios';
import reducers from './reducers';
import Home from './components/Home/Home';
import Introduction from './components/Introduction/Introduction';
import ListOfProjects from './components/Project-List/ProjectList';
import NavBar from './components/NavBar/NavBar';
import {data} from './Data/ProjectData';

import './App.scss';

function App() {
  const dispatch = useDispatch();

  const [tab, setTab] = useState('Home');

  React.useEffect(() => {  
      const url = "https://api.pexels.com/v1/collections/bfruvsm";  
      const access_token = '563492ad6f917000010000014213cd27065d4dac816b969ebc1f3bcd';  
      fetch(url, {  
          headers: {  
              'Authorization': `${access_token}`  
          }  
      }).then((resp) => {
        return resp.json();
      }).then(data => {  
        console.log(data);
          const action = {
            payload: data.media,
          }
          dispatch(addImages(action));  
      }) 
  },[dispatch]);

  return (
    <Provider store={reducers}>
    <div className="main_page">

      <NavBar setTab={setTab}/>

      {tab === 'Home' && <Home />}

      {tab === 'About-me' && <Introduction />}

      {tab === 'Projects' && <ListOfProjects listOfProjects={data}/>}

      <div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
