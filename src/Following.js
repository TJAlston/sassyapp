import React from 'react'
import 'whatwg-fetch'

class Following extends React.Component {

  constructor () {
    super()
    this.state = {
      following: []
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.url !== undefined) {
      fetch(nextProps.url + '?access_token=7b29e64a783cb6e2043f31721d72877e70c049c4')
        .then((resp) => {
          return resp.json()
        })
        .then((data) => {
          this.setState({ following: data })
        })
    }
  }

  render () {
    const following = this.state.following.map((following) => {
      return <li key={following.id}><a href={following.html_url}>{following.login}</a></li>
    })

    return <ul className='Following'>
      {following}
    </ul>
  }
}

export default Following
