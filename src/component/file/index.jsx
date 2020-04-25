import React from 'react'
import { Menu, Dropdown } from 'antd'
import { observer, inject } from 'mobx-react'
import './index.less'
@inject('Mome')
@observer
class File extends React.Component {//文件列表 插件类
  menu = (index) => {
    const {
      setFileByKey,
      deleteFile
    } = this.props.Mome
    return <Menu>
      <Menu.Item key='1'
        onClick={
          () => {
            setFileByKey(index)
          }
        }
      >
        重命名
      </Menu.Item>
      <Menu.Item key='2'
        onClick={
          () => {
            if (confirm('你确认删除')) {
              deleteFile(index)
            }
          }
        }
      >
        删除
        </Menu.Item>
    </Menu>
  }
  render() {
    const { files, saveFile } = this.props.Memo // 结构解析
    return <div className='app-file-box'>
      {
        files && files.fileArray.map((item, index) => {
          return <div key={item.key} className='file-box'>
            {(files.fileArray[index].active) ? <input autoFocus value={item.fileName} onChange={
              (e) => {
                console.log(e.target.value)
                saveFile(index, e.target.value) // 调用父组件
              }
            }
              onBlur={ // 关闭编辑
                () => {
                  this.props.closeFile(index)
                }
              }
            />
              :
              <Dropdown overlay={this.menu(index)} trigger={['contextMenu']}>
                <div className='file-div' onClick={
                  () => {
                    this.props.openFile(index)
                  }
                }
                  style={{ backgroundColor: item.light ? '#37373D' : '#1e1e1e' }}
                >
                  {item.fileName}
                </div>
              </Dropdown>
            }

          </div>
        })
      }
    </div>
  }
}
export {
  File
}