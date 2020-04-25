import React from 'react'
import { Input } from 'antd';
import './index.less'
const { TextArea } = Input;
class Context extends React.Component {//文本展示编辑插件
  render() {
    const { file } = this.props // 结构解析
    return <div className='app-text'>
      <TextArea value={file && file.text} onChange={
        (e) => {
          this.props.saveText(e.target.value)
        }
      }/>
    </div>
  }
}
export {
  Context
}