import { observable, action } from "mobx";
class User {
  @observable isLogin = false
  @observable user = {
    name: ''
  }
  @action toLogin = () => { // 调登录接口
  }
}
const user = new User() //创建mome类实际对象 
export {
  user //抛出对象
}