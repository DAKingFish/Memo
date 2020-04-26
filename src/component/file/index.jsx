import React from 'react'
import { Menu, Dropdown } from 'antd'
import { observer, inject } from 'mobx-react'
import './index.less'
@inject('Mome')//注入
@observer//申明使用mobx 观察者
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
            setFileByKey('item', true, index)
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
    const { files, setFileByKey } = this.props.Mome // 结构解析
    return <div className='app-file-box'>
      {
        files && files.map((item, index) => {
          return <div key={item.key} className='file-box'>
            {(files[index].item) ? <input autoFocus value={item.fileName} onChange={
              (e) => {
                console.log(e.target.value)
                setFileByKey('name', e.target.value, index) // 调用父组件 编辑文件名
              }
            }
              onBlur={ // 关闭编辑
                () => {
                  setFileByKey('item', false, index)
                }
              }
            />
              :
              <Dropdown overlay={this.menu(index)} trigger={['contextMenu']}>
                <div className='file-div' onClick={//单击打开文本
                  () => {
                    setFileByKey('context',true,index)
                  }
                }
                  style={{ backgroundColor: item.active ? '#37373D' : '#1e1e1e' }}
                >
                  {item.name}
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