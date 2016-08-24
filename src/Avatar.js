import React, { Component } from 'react'

class Avatar extends Component {

  render () {
    return <div className='Avatar'>
      <img src={`https://avatars.githubusercontent.com/u/${this.props.id}?v=3`} alt=""/>
    </div>
  }
}

export default Avatar
