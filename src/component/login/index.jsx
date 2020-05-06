import React from 'react'
import { observer, inject } from 'mobx-react'
import './index.less'
@inject('User')
@observer
class Login extends React.Component {
  render() {
    const { user: { name, password }, changeValue, toLogin } = this.props.User
    return <div className='app-login'>
      <div className='login-body'>
        <div className='login-title'>用户登录</div>
        <div className='login-name'>
          用户名<i className='iconfont icon-yonghuming'></i>:
          <input placeholder='输入用户名' value={name} onChange={
            (e) => {
              changeValue('name', e.target.value)
            }
          } />
        </div>
        <div className='login-password'>
          密码<i className='iconfont icon-mima'></i>:
          <input placeholder='请输入密码' value={password} onChange={
            (e) => {
              changeValue('password', e.target.value)
            }
          } />
        </div>
        <div className='login-button'>
          <button onClick={
            () => {
              toLogin()
            }
          }>登录</button>
        </div>
      </div>
    </div>
  }
}
export {
  Login
}