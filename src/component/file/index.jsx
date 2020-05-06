import React from 'react'
import { Menu, Dropdown, Button } from 'antd'
import { observer, inject } from 'mobx-react'
import './index.less'
@inject('Mome')//注入
@observer//申明使用mobx 观察者
class File extends React.Component {//文件列表 插件类
  menu = (index,id) => {
    const {
      setFileByKey,
      deleteFile
    } = this.props.Mome
    return <Menu>
      <Menu.Item key='1'
        onClick={
          () => {
            setFileByKey('edit', true, index)
          }
        }
      >
        重命名
      </Menu.Item>
      <Menu.Item key='2'
        onClick={
          () => {
            if (confirm('你确认删除')) {
              deleteFile(index,id)
            }
          }
        }
      >
        删除
        </Menu.Item>
    </Menu>
  }
  renderFile = (files, setFileByKey) => {
    return <div className='file-box'>
      <div className='file-box-body'>
        {
          files.map((item, index) => {
            return item.edit ? <input
              autoFocus
              key={item.key} 
              value={item.name}
              onChange={
                (e) => {
                  setFileByKey('name', e.target.value, index) // 调用父组件 编辑文件名
                }
              }
              onBlur={ // 关闭编辑
                (e) => {
                  setFileByKey('edit', false, index)
                  this.props.Mome.changeFileName(e.target.value,item.id)
                }
              }
            /> : <Dropdown key={item.key} overlay={this.menu(index,item.id)} trigger={['contextMenu']}>
                <div
                  className={item.active ? 'file-div-active' : 'file-div'}
                  onClick={//单击打开文本
                    () => {
                      setFileByKey('active', true, index)
                    }
                  }
                >
                  {item.name}
                </div>
              </Dropdown>
          })
        }
      </div>
      <div className='file-box-bottom'>
        <button onClick={
          () => {
            this.props.Mome.addFile()
          }
        }>新建文件</button>
      </div>
    </div>
  }
  render() {
    const { files, setFileByKey } = this.props.Mome // 结构解析
    return <div className='app-file-box'>
      {
        files === null ? <div className='app-file-box-none'>
          请先选择一个文件夹
        </div> : this.renderFile(files, setFileByKey)
      }
    </div>
  }
}
export {
  File
}