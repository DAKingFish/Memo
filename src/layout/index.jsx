import React from 'react'
import { Folder } from '../component/folder/index.jsx'
import { File } from '../component/file/index.jsx'
import { Context } from '../component/context/index.jsx'
import './index.less'
class Layout extends React.Component {
  render() {
    return <div className='memo-body'>
      <div className='body-left'>
        <Folder />
      </div>
      <div className='body-mod'>
        <File />
      </div>
      <div className="body-right">
        <Context />
      </div>
    </div>
  }
}
export default Layout