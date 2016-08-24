import React from 'react'
import 'whatwg-fetch'

class Followers extends React.Component {

  constructor () {
    super()
    this.state = {
      followers: []
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.url !== undefined) {
      fetch(nextProps.url + '?access_token=7b29e64a783cb6e2043f31721d72877e70c049c4')
        .then((resp) => {
          return resp.json()
        })
        .then((data) => {
          this.setState({ followers: data })
        })
    }
  }

  render () {
    const followers = this.state.followers.map((follower) => {
      return <li key={follower.id}><a href={follower.html_url}>{follower.login}</a></li>
    })

    return <ul className='Followers'>
      {followers}
    </ul>
  }
}

export default Followers
