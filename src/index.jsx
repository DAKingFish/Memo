import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import store from './store/index'
import Layout from './layout/index.jsx'
import './index.less'
ReactDOM.render(<Provider {...store}>
    <Layout />
</Provider>, document.querySelector('#root'))