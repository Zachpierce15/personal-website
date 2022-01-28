import React from 'react';
import App from '../App';
import { Provider } from 'react-redux';
import reducers from '../reducers/index';


function RenderApp() {

  return (
    <Provider store={reducers}>
        <App />
    </Provider>
  );
}

export default RenderApp;
