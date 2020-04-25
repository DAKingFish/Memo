import React from 'react'
import { Menu, Dropdown } from 'antd'
import { observer, inject } from 'mobx-react'
import './index.less'
@inject('Mome')
@observer
class Folder extends React.Component {
  menu = (index) => {
    const {
      setFolderByKey
    } = this.props.Mome
    return <Menu>
      <Menu.Item
        onClick={
          () => {
            this.addFile(index);
          }
        }
      >
        新建
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
              this.deleteFolder(index)
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
      addFolder
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
              () => {
                setFolderByKey('edit', false, index)
              }
            }
          /> : <Dropdown key={item.key} overlay={this.menu(index)} trigger={['contextMenu']}>
              <div className={item.active ? 'divactive' : 'folder-div'} onClick={
                () => {
                  setFolderByKey('active', true, index)
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