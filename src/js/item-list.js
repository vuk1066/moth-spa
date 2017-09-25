import React from 'react'
import Redux from 'redux' 
import { createStore } from 'redux'
import { Link } from 'react-router-dom'
 
class ItemList extends React.Component { 
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
      <ul> 
          {this.state.items.length ? 
            this.state.items.map(item=>
              <li key={item.id}>
                {item.id} 
                <img src={item.thumbnailUrl} />
                <Link to={`/${item.id}`}> Profile </Link> 
              </li>) : <li>Loading...</li> 
          } 
      </ul> 
   ) 
  } 
}

export default ItemList;