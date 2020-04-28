import React from 'react'
import { observer, inject } from 'mobx-react'
import './index.less'
@inject('User')
@observer
class Login extends React.Component {
  render() {
    return <div className='app-login'>
      我是登录页
    </div>
  }
}
export {
  Login
}