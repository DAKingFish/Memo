import { observable, action } from "mobx";
/**
 * folder: {
    key: Math.random(),
    name: '',
    edit: false,
    active: false,
    files: [] // 所有的文件
  }
 */
class Mome {
  @observable folders = []  // 所有的文件夹
  @observable files = null    // 所有的文件
  @observable context = null // 文本

  @action addFolder = () => { // 添加文件夹
    this.folders.forEach(item => {
      item.edit = false
    })
    this.folders.push({
      key: Math.random(),
      name: '新建文件夹',
      edit: true,
      active: false,
      files: []
    })
  }
  @action deleteFolder = (index) => { // 删除文件夹
    if (this.folders[index].active) {
      this.files = null // 清空
    }
    this.folders.splice(index, 1)
  }

  @action setFolderByKey = (key, value, index) => { // 修改指定下标属性值
    if (key === 'active') { // 先全部设置不选中
      this.folders.forEach(item => {
        item.active = false
      })
      this.files = this.folders[index].files // 设置 files
    }
    this.folders[index][key] = value  //单个属性赋值
  }

  @action addFile = () => { // 添加文件
    let index = this.folders.findIndex(item => {
      return item.active
    })
    this.folders[index].files.push({
      key: Math.random(),
      name: '新建文件',
      edit: true,
      active: false,
      context: {
        edit: true,
        text: ''
      }
    })
    this.files = this.folders[index].files
  }
  @action deleteFile = (index) => { // 删除文件
    if(this.files[index].active){
      this.context = null
    }
    this.files.splice(index, 1) // 删除
  }
  @action setFileByKey = (key, value, index) => { //修改file属性
    if (key === 'active') { // 文件点击
      this.files.forEach((item, _index) => {
        item.active = false
      })
      this.context = this.files[index].context // 赋值内容
    }
    if (key === 'edit') {
      this.files.forEach((item, _index) => {
        item.edit = false
      })
    }
    this.files[index][key] = value
  }
  @action setContentByKey = (key, value) => { // 修改内容
    this.context[key] = value
  }
}
const mome = new Mome() //创建mome类实际对象 
export {
  mome //抛出对象
}