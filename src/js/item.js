import React from 'react'
import Redux from 'redux'
import { createStore } from 'redux'
import { Link } from 'react-router-dom'

class Item extends React.Component {
  constructor() {
    super();
     this.state={items:[]};
  }
  componentDidMount(){
    fetch(`http://jsonplaceholder.typicode.com/photos`)
    .then(result=>result.json())
    .then(items=>this.setState({items}))
  }
  render() {
    return(
      <div>
          {this.state.items.length ?
            this.state.items.map(item=><li key={item.id}>{item.title} <img src={item.thumbnailUrl} /></li>) 
            : <li>Loading...</li>
          }
      </div>
   )
  }
}

export default Item;