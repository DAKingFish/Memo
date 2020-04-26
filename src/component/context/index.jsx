import React from 'react'
import { Input } from 'antd'
import { observer, inject } from 'mobx-react'
import './index.less'
const { TextArea } = Input;
@inject('Mome')//注入
@observer//申明使用mobx 观察者
class Context extends React.Component {//文本展示编辑插件
  render() {
    const { setContentByKey, context } = this.props.Mome // 结构解析
    return <div className='app-text'>
      {
        context == null ? <div className='app-text-none'>
          清先选择一个文件
        </div> : <TextArea value={context.text} onChange={
          (e) => {
            setContentByKey('text', e.target.value)
          }
        } />
      }
    </div>
  }
}
export {
  Context
}