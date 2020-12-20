import React from 'react'
import jss from 'jss'
import preset from 'jss-preset-default'
import { render } from 'react-dom'
import { App } from './components/App'
import { BrowserRouter } from 'react-router-dom'

// Sets up JSS styling
jss.setup(preset())

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
