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
  @observable context = []  // 文本

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
    this.folders.splice(index,1)
  }

  @action setFolderByKey = (key, value, index) => { // 修改指定下标属性值
    if (key === 'active') { // 先全部设置不选中
      this.folders.forEach(item => {
        item.active = false
      })
    }
    this.folders[index][key] = value
  }

  @action addFile = (index) => { // 添加文件   
    this.folders[index]. files.push({
      key: Math.random(),
      name: '新建文件',
      edit: true,
      active: false,
      text: []
    })
  }
  @action deleteFile = (index) => { // 删除文件

  }
  @action renameFile = () => { // 重名文件

  }

  @action updateContent = () => { // 修改内容

  }
}
const mome = new Mome()
export {
  mome
}