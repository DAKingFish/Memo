import { observable, action } from "mobx"
import { get, post } from '../api'
import { browserHistory } from 'react-router'
import { message } from 'antd'
class User {
  @observable isLogin = true
  @observable user = {
    name: '',
    password: ''
  }
  @action toLogin = async () => { // 调登录接口
   const { success } = await post('/user/login', this.user)
   if(success){
    browserHistory.push('/home')
    //location.hash = '/home'
   }else{
    message.error('用户名或密码错误')
   }
  }
  @action changeValue = (key, value) => {//箭头函数
    this.user[key] = value
  }
}
const user = new User() //创建user类实际对象 
export {
  user //抛出对象
}