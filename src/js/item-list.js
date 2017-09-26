import React from 'react'
import { createStore } from 'redux'
import { Link } from 'react-router-dom'
import jsonData from './testData'
 
class ItemList extends React.Component { 
  constructor() { 
    super(); 
     this.state={items:jsonData}; 
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