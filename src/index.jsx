import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import store from './store/index'
import { AppRouter } from './router.jsx'
import './index.less'
ReactDOM.render(<Provider {...store}>
  <AppRouter />
</Provider>, document.querySelector('#root'))