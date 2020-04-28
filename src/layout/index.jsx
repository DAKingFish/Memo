import React from 'react'
import './index.less'
class Layout extends React.Component {
  render() {
    return <div className='app-layout'>
      <div className='app-layout-body'>
        { this.props.children }
      </div>
    </div>
  }
}
export {
  Layout
}