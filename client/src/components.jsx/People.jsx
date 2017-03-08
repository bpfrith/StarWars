import React from 'react'
import PeopleList from './PeopleList.jsx'

class people extends React.Component{
  constructor(){
    super();
    this.state = {people: []}
  }

  componentDidMount(){
    let url = 'http://swapi.co/api/people/?format=json'
    const request = new XMLHttpRequest()
    request.open('GET', url)

    request.onload = () =>{
      const responseData = JSON.parse(request.responseText)
      const peopleList = responseData.results
      this.setState({people: peopleList})
    }
    request.send
  }

  render() {
    return(<PeopleList people={this.state.people} />)
  }
}

export default People