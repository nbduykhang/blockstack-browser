import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history/lib'

import routes from './routes'
import configureDataStore from './store/configure/index'
import './styles/app.css'
import { setUpContextMenu } from './contextMenu'

const store = configureDataStore()

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

//setUpContextMenu()

render(
  <Provider store={store}>
    <Router history={appHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
)

if (process.env.NODE_ENV !== 'production') {
  // Use require because imports can't be conditional.
  // In production, you should ensure process.env.NODE_ENV
  // is envified so that Uglify can eliminate this
  // module and its dependencies as dead code.
  // require('./createDevToolsWindow')(store);
}