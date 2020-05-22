import React from 'react'
import { Input } from 'antd'
import { observer, inject } from 'mobx-react'
import './index.less'
const { TextArea } = Input;
@inject('Mome')//注入
@observer//申明使用mobx 观察者
class Context extends React.Component {//文本展示编辑插件
  render() {
    const { setContentByKey, context, edit,setEdit } = this.props.Mome // 结构解析
    return <div className='app-text'>
      <div className='app-text-context'>
        {
          context == null ? <div className='app-text-none'>
            清先选择一个文件
        </div> : <TextArea value={context.text} onChange={
              (e) => {
                context.text = e.target.value
                setEdit(true)
              }
            } />
        }
      </div>
      <div className='app-text-bottom'>
        {
          !edit ? <button className='btn'>编辑后保存</button> : <button
            onClick={
              () => {
                setContentByKey('text', context.text)
                setEdit(false)
              }
            }>保存</button>
        }
      </div>
    </div>
  }
}
export {
  Context
}