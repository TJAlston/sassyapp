import React, { Component } from 'react'
import Avatar from './Avatar'
import Followers from './Followers'
import Following from './Following'
import Repositories from './Repos'
import Organizations from './Organizations'

class App extends Component {

  constructor () {
    super()
    this.state = {
      user: 'TJAlston',
      userData: {}
    }
  }

  componentDidMount () {
    fetch(`https://api.github.com/users/${this.state.user}?access_token=7b29e64a783cb6e2043f31721d72877e70c049c4`)
      .then((resp) => { return resp.json() })
      .then((data) => {
        this.setState({ userData: data })
      })
  }

  render () {
    return <div className='App'>
    <div className='Header'>TJ ALSTON</div>
      <div className='Sidebar'>
        <Avatar id={this.state.userData.id} />
         <div className='Name'>TJ Alston </div>
           <div className='Bio'> Front End Engineer Student
             <div className='Info'>
             <div className='Location'> Tampa, Florida </div>
             <div className='Email'> tjalston82@gmail.com </div>
             <div className='Website'> http://tjalston82.blogspot.com </div>
             <div className='JoinDate'> Joined on Jul 18, 2016 </div>
             </div>
           </div>
      <p>FOLLOWERS</p>
      <Followers url={this.state.userData.followers_url} />
      <p>FOLLOWING</p>
      <Following url={this.state.userData.following_url} />
      <p>Organizations</p>
      <Organizations url={this.state.userData.organizations_url} />
      </div>
          <Repositories url={this.state.userData.repos_url} />
        <div className='footer'> COPYRIGHT Tameka J. Alston 2016</div>
      </div>
  }
}

export default App
