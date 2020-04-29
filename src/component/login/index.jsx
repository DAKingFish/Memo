import React from 'react'
import { observer, inject } from 'mobx-react'
import './index.less'
@inject('User')
@observer
class Login extends React.Component {
  render() {
    const { user: { name, pass }, changeValue } = this.props.User
    return <div className='app-login'>
      <div className='login-name'>
        <input placeholder='输入用户名' value={name} onChange={
          (e) => {
            changeValue('name', e.target.value)
          }
        } />
      </div>
      <div className='login-password'>
        <input placeholder='请输入密码' value={pass} onChange={
          (e) => {
            changeValue('pass', e.target.value)
            alert(pass)
          }
        } />
      </div>
      <div className='login-button'>
        <button onClick={
          () => {
            alert(name, pass)
          }
        }>登录</button>
      </div>
    </div>
  }
}
export {
  Login
}