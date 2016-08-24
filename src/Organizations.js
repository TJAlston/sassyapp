import React from 'react'
import 'whatwg-fetch'

class Organizations extends React.Component {

  constructor () {
    super()
    this.state = {
      organizations: []
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.url !== undefined) {
      fetch(nextProps.url + '?access_token=7b29e64a783cb6e2043f31721d72877e70c049c4')
        .then((resp) => {
          return resp.json()
        })
        .then((data) => {
          this.setState({ organizations: data })
        })
    }
  }

  render () {
    const organizations = this.state.organizations.map((organizations) => {
      return <li key={organizations.id}><a href={organizations.html_url}>{organizations.login}</a></li>
    })

    return <ul className='Organizations'>
      {organizations}
    </ul>
  }
}

export default Organizations
