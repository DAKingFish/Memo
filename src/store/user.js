import { observable, action } from "mobx";
class User {
  @observable isLogin = true
  @observable user = {
    name: '',
    password: ''
  }
  @action toLogin = () => { // 调登录接口
  }
  @action changeValue = (key ,value) => {//箭头函数
    this.user[key]= value
  }
}
const user = new User() //创建user类实际对象 
export {
  user //抛出对象
}