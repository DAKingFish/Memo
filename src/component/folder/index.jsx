import React from 'react'
import { Menu, Dropdown } from 'antd'
import { observer, inject } from 'mobx-react'
import './index.less'
import { set } from 'mobx'
@inject('Mome')
@observer
class Folder extends React.Component {
  componentWillMount(){
    this.props.Mome.getFolder() // 查询所有文件夹
  }
  menu = (index,id) => {
    const {
      addFolder,
      setFolderByKey,
      deleteFolder
    } = this.props.Mome
    return <Menu>
      <Menu.Item
        onClick={
          () => {
            addFolder()
          }
        }
      >
        新建文件夹
			</Menu.Item>
      <Menu.Item
        onClick={
          () => {
            setFolderByKey('edit', true, index)
          }
        }
      >
        重命名
      </Menu.Item>
      <Menu.Item
        onClick={
          () => {
            if (confirm('你确认删除')) {
              deleteFolder(index, id)
            }
          }
        }
      >
        删除
        </Menu.Item>
    </Menu>
  }
  render() {
    const {
      folders,
      setFolderByKey,
      addFolder,
      getFile,
      changeFolderName
    } = this.props.Mome
    return [<div className='left-folder' key={'left-folder'}>
      {
        folders.map((item, index) => {
          return item.edit ? <input
            autoFocus
            value={item.name}
            key={item.key}
            onChange={  // 保存内容
              (e) => {
                setFolderByKey('name', e.target.value, index)
              }
            }
            onBlur={ // 关闭编辑
              (e) => {
                setFolderByKey('edit', false, index)
                changeFolderName(e.target.value,item.id)
              }
            }
          /> : <Dropdown key={item.key} overlay={this.menu(index,item.id)} trigger={['contextMenu']}>
              <div className={item.active ? 'divactive' : 'folder-div'} onClick={
                () => {
                  setFolderByKey('active', true, index);
                  // 查询该文件下的文件
                  getFile(item.id)
                }
              }
              >
                {item.name}
              </div>
            </Dropdown>
        })
      }
    </div>,
    <div className='left-down' key={'left-down'}>
      <button onClick={
        () => {
          addFolder()
        }
      }>新建文件夹</button>
    </div>]
  }
}
export {
  Folder
}