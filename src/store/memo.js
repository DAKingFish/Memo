import { observable, action, runInAction } from "mobx";
import { post, get } from '../api'
import { message } from 'antd'
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

  @action getFolder = async () => {
    const { code, data } = await get('/mome/getfolder', {
      uid: 1
    })
    if (code === 200) {
      this.folders = data.map(item => {
        return {
          id: item.id,
          key: Math.random(),
          name: item.name,
          edit: false,
          active: false,
          files: []
        }
      })
      console.log(data)
    } else {
      message.error('查询文件夹失败')
    }

  }
  @action addFolder = async () => { // 添加文件夹
    const { code, insertId } = await post('/mome/addfolder', {
      name: '新建文件夹',
      uid: 1
    })
    if (code == 200) {
      this.folders.forEach(item => {
        item.edit = false
      })
      this.folders.push({
        id: insertId,
        key: Math.random(),
        name: '新建文件夹',
        edit: true,
        active: false,
        files: []
      })
      //location.hash = '/home'
    } else {
      message.error('添加文件失败')
    }

  }
  @action deleteFolder = async (index, id) => { // 删除文件夹
    const { code } = await post('/mome/deletefolder', {
      id
    })
    if (code === 200) {
      if (this.folders[index].active) {
        this.files = null // 清空
      }
      this.folders.splice(index, 1)
    } else {
      message.error('删除文件失败')
    }

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
  @action changeFolderName = async (name, id) => {
    const { code } = await post('/mome/updatefolder', {
      name, id
    })
    if (code !== 200) {
      message.error('修改文件夹名失败')
    }
  }
  @action getFile = async (id) => {
    this.context = [];//清空之前的数据
    const { code, data } = await get('/mome/getfile', {
      pid: id
    })
    if (code === 200) {
      console.log(data)
      this.files = data.map(item => {
        return {
          id: item.id,
          key: Math.random(),
          name: item.name,
          active: false,
          context: {
            edit: true,
            text: item.content
          }
        }
      })
    } else {
      message.error('查询文件失败')
    }
    //查询莫文件夹所有文件
  }
  @action addFile = async () => { // 添加文件
    let index = this.folders.findIndex(item => {
      return item.active
    })
    const { code, insertId } = await post('/mome/addfile', {
      name: '新建文件',
      pid: this.folders[index].id,
      content: ''
    })
    if (code === 200) {
      runInAction(() => {
        this.files.push({
          id: insertId,
          key: Math.random(),
          name: '新建文件',
          edit: true,
          active: false,
          context: {
            edit: true,
            text: ''
          }
        })
      })
    }
  }
  @action deleteFile = async (index, id) => { // 删除文件
    if (this.files[index].active) {//如果删除的文件时高亮清空里面的内容
      this.context = null
    }
    const { code } = await post('/mome/deletefile', {
      id
    })
    if (code === 200) {
      this.files.splice(index, 1) // 删除
    } else {
      message.error('删除文件失败')
    }

  }
  @action changeFileName = async (name, id) => {
    const { code } = await post('/mome/updatefile', {
      name, id
    })
    if (code !== 200) {
      message.error('改名失败')
    }
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
  @action setContentByKey = async (key, value) => { // 修改内容
    let { id } = this.files.find(item => {
      return item.active
    })
    const { code } = await post('/mome/updatefile', {
      id, content: value
    })
    if(code === 200) {
      this.context[key] = value
    }else{
      message.error('修改备忘录失败')
    }
 
  }
}
const mome = new Mome() //创建mome类实际对象 
export {
  mome //抛出对象
}