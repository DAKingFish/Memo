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
  @observable files = []    // 所有的文件
  @observable context = [] // 文本

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
  @action deleteFolder = () => { // 删除文件夹
    this.folders.splice(index, 1)
  }

  @action setFolderByKey = (key, value, index) => { // 修改指定下标属性值
    if (key === 'active') { // 先全部设置不选中
      this.folders.forEach(item => {
        item.active = false
      })
    }
    this.folders[index][key] = value  //单个属性赋值
  }

  @action addFile = (index) => { // 添加文件   
    this.folders[index].files.push({
      key: Math.random(),
      name: '新建文件',
      edit: true,
      active: false,
      // context: [{ edit: true, text: '一分耕耘一份收获' }]
      editText: true,
      text: 一分耕耘一份收获
    })
  }
  @action deleteFile = (index) => { // 删除文件
    this.folders.forEach(item => {
      if (item.active) {
        item.files.splice(index, 1)
      }
    })
  }
  @action setFileByKey = (key, value, index) => { //修改file属性
    this.folders.forEach((item, ind) => {
      if (item.active) {
        if (key === 'active') { // 先全部设置不选中
          item.files.forEach(itemfile => {
            itemfile.active = false
          })
        }
        item.files[index][key] = value
        if (key === 'editText') {
          item.files.forEach(itemfile => {
            itemfile.editText = false
          })
        }
        item.files[index][key] = true
      }
    })
  }
  @action updateContent = () => { // 修改内容

  }
}
const mome = new Mome() //创建mome类实际对象 
export {
  mome //抛出对象
}