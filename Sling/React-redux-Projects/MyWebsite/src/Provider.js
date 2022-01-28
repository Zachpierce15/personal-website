import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import RenderApp from './client/renderApp';

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <RenderApp />
  </Provider>,
  rootElement
)