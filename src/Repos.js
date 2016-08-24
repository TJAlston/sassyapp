import React, { Component } from 'react'
import 'whatwg-fetch'

class Repos extends React.Component {

  constructor () {
    super()
    this.state = {
      repositories: []
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.url !== undefined) {
      fetch(nextProps.url + '?access_token=7b29e64a783cb6e2043f31721d72877e70c049c4')
        .then((resp) => {
          return resp.json()
        })
        .then((data) => {
          this.setState({ repositories: data })
        })
    }
  }

  render () {
    const repositories = this.state.repositories.map((repositories) => {
      return <li key={repositories.name}><a href={repositories.html_url}>{repositories.name}</a></li>
    })

    return <ul className='Repositories'>
      {repositories}
    </ul>
  }
}

export default Repos
