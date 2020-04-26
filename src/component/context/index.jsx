import React from 'react'
import { Input } from 'antd'
import { observer, inject } from 'mobx-react'
import './index.less'
const { TextArea } = Input;
@inject('Mome')//注入
@observer//申明使用mobx 观察者
class Context extends React.Component {//文本展示编辑插件
  render() {
    const { files , updateContent,context} = this.props.Memo  // 结构解析
    return <div className='app-text'>
      <TextArea value={files && files.context.text} onChange={
        (e) => {
          updateContent(e.target.value)
        }
      }/>
    </div>
  }
}
export {
  Context
}