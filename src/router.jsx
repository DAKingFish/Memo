import * as React from 'react'
import { Router, browserHistory , Route } from 'react-router'
import { Layout } from './layout/index.jsx'
import { Login } from './component/login/index.jsx'
import { Home } from './component/home/index.jsx'
class AppRouter extends React.Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path='/' component={Layout}>
          <Route path='home' component={Home} />
          <Route path='login' component={Login} />
        </Route>
      </Router>
    )
  }
}
export { AppRouter }
