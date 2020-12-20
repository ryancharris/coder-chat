import React from 'react'
import jss from 'jss'
import preset from 'jss-preset-default'
import { render } from 'react-dom'
import { App } from './components/App'

// Sets up JSS styling
jss.setup(preset())

render(<App />, document.getElementById('root'))
