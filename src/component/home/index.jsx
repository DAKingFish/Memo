import React from 'react'
import { Folder } from '../folder/index.jsx'
import { File } from '../file/index.jsx'
import { Context } from '../context/index.jsx'
import './index.less'
class Home extends React.Component {
  render() {
    return <div className='app-home'>
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
export {
  Home
}